import Ember from 'ember';
import moment from 'moment';
import { EKMixin, keyDown } from 'ember-keyboard';

const { computed, inject, Controller } = Ember;
const { alias } = computed;

export default Controller.extend(Ember.Evented, EKMixin, {
  session: inject.service(),
  ajax: inject.service(),
  notify: inject.service(),
  i18n: inject.service(),

  activateKeyboard: Ember.on('init', function() {
    this.set('keyboardActivated', true);
  }),
  previousMonthEvent: Ember.on(keyDown('ArrowLeft'), function() {
    this.send('previousMonth');
  }),
  nextMonthEvent: Ember.on(keyDown('ArrowRight'), function() {
    this.send('nextMonth');
  }),

  isShowingModal: false,
  newBill: {},

  place: alias('model'),
  isPayer: computed('place.payer', function() {
    return this.get('session.userEmail') === this.get('place.payer.email');
  }),
  currentBills: computed('place.bills', 'month', function() {
    return this.get('place.bills').filter((bill) => {
      return bill.get('month') === this.get('month');
    });
  }),
  billIds: computed('currentBills', function() {
    return this.get('currentBills').map((bill) => bill.get('id'));
  }),
  redabableMonth: computed('month', 'i18n.locale', function() {
    const locale = this.get('i18n.locale');
    moment.locale(locale);
    return this.get('momentMonth').format('MMMM YYYY').capitalize();
  }),
  momentMonth: computed('month', function() {
    const [month, year] = this.get('month').split(' ');
    return moment(`${year}-${month}-01`);
  }),
  currentEmail: alias('session.userEmail'),

  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    createBill() {
      let bill = this.store.createRecord('bill', this.get('newBill'));
      const place = this.get('place');
      bill.set('place', place);
      bill.set('month', this.get('month'));
      this.set('newBill', {});
      this.set('isShowingModal', false);

      bill.save().then(() => {
        place.get('bills').pushObject(bill);
        place.save().then(() => {
          place.reload();
        });
      });
    },
    generateRent() {
      return this.get('ajax').request('/generator', {
        method: 'POST',
        data: {
          place: this.get('place.id'),
          month: this.get('month')
        }
      }).then(() => {
        this.get('notify').success('generated successfully');
        this.get('place').reload();
      });
    },
    leave() {
      if (!confirm('Are you sure?')) {
        return;
      }
      const users = this.get('place.users');
      users.forEach((user) => {
        if (this.get('session.userEmail') === user.get('email')) {
          this.get('place.users').removeObject(user);
          this.transitionToRoute('places');
        }
      });
    },
    changeStatus(payment) {
      if (!this.get('isPayer')) {
        return;
      }
      const status = payment.get('status');
      if (status === 'wait') {
        payment.set('status', 'paid');
        payment.save();
      } else if (status === 'paid') {
        payment.set('status', 'wait');
        payment.save();
      } else {
        console.log('unknow status');
      }
    },
    previousMonth() {
      const previous = this.get('momentMonth').subtract('1', 'month');
      this.set('month', previous.format('MM YYYY'));
    },
    nextMonth() {
      const previous = this.get('momentMonth').add('1', 'month');
      this.set('month', previous.format('MM YYYY'));
    },
    dept(user, month) {
      let amount = 0;

      const bills = this.store.peekAll('bill').filter((bill) => {
        return bill.get('month') === month;
      });
      const billIds = bills.mapBy('id');
      const payments = user.get('bills').filter((bill) => {
        return billIds.includes(bill.get('bill.id')) && bill.get('status') === 'wait';
      });
      if (payments.length !== 0) {
        const array = payments.mapBy('amount');
        amount = array.reduce(function (prev, curr) {
          return prev + curr;
        });
      }
      const rent = user.get('rents').find((rent) => {
        return moment(rent.get('createdAt')).format('MM YYYY') === this.get('month');
      });
      if (rent !== undefined && rent.get('status') === 'wait') {
        amount += rent.get('amount');
      }
      return amount;
    }
  }

});

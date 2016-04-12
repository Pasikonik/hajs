import Ember from 'ember';
import moment from 'moment';

const { computed, inject } = Ember;
const { alias } = computed;

export default Ember.Controller.extend({
  session: inject.service(),

  isShowingModal: false,
  newBill: {},

  place: alias('model'),
  isPayer: computed('place.payer', function() {
    return this.get('session.userEmail') === this.get('place.payer.email');
  }),
  currentBills: computed('place.bills', 'month', function() {
    return this.get('place.bills').filter((bill) => {
      return moment(bill.get('createdAt')).format('MM YYYY') === this.get('month');
    });
  }),
  billIds: computed('currentBills', function() {
    return this.get('currentBills').map((bill) => bill.get('id'));
  }),
  redabableMonth: computed('month', function() {
    return this.get('momentMonth').format('MMMM YYYY');
  }),
  momentMonth: computed('month', function() {
    const [month, year] = this.get('month').split(' ');
    return moment(`${year}-${month}-01`);
  }),

  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    createBill() {
      let bill = this.store.createRecord('bill', this.get('newBill'));
      const place = this.get('place');
      bill.set('place', place);
      this.set('newBill', {});
      this.set('isShowingModal', false);

      bill.save().then(() => {
        place.get('bills').pushObject(bill);
        place.save().then(() => {
          place.reload();
        });
      });
    },
    leave() {
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
    }
  }

});

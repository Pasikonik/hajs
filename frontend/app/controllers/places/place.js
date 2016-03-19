import Ember from 'ember';

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
    }
  }

});

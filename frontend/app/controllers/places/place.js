import Ember from 'ember';

const { computed } = Ember;
const { alias } = computed;

export default Ember.Controller.extend({
  isShowingModal: false,
  newBill: {},
  // currentMonth: 'Marzec',

  place: alias('model'),

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
        place.save();
        const freshBill = this.store.findRecord('bill', bill.get('id'));
        freshBill.get('payments');
      });
    }
  }
});

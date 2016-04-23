import Ember from 'ember';
import DS from 'ember-data';

const { Model, attr, hasMany, belongsTo } = DS;
const { computed } = Ember;
const { filterBy } = computed;

export default Model.extend({
  pseudonym: attr('string'),
  email: attr('string'),
  password: attr('string'),
  payments: hasMany('payment'),
  place: belongsTo('place'),

  isRenter: computed('place', function() {
    return !!this.get('place.id');
  }),
  bills: computed.filter('payments', function(payment) {
    return !!payment.get('bill.id');
  }),
  rents: computed.filter('payments', function(payment) {
    return !!!payment.get('bill.id');
  }),
  displayName: computed('email', 'pseudonym', function() {
    return this.get('pseudonym') ? this.get('pseudonym') : this.get('email');
  }),
  paymentsToPay: computed.filterBy('payments', 'status', 'wait'),
  balance: computed('paymentsToPay', function() {
    const payments = this.get('paymentsToPay');
    if (payments.length === 0) {
      return 0;
    } else {
      return this.get('paymentsToPay').mapBy('amount').reduce((a, b) => a + b);
    }
  })
});

import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

const { Model, attr, hasMany, belongsTo } = DS;
const { computed } = Ember;

export default Model.extend({
  // firstName: attr('string'),
  // lastName: attr('string'),
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
  rent: computed.filter('payments', function(payment) {
    return !!!payment.get('bill.id');
  }),
  displayName: computed('email', 'pseudonym', function() {
    return this.get('pseudonym') ? this.get('pseudonym') : this.get('email');
  })

});

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
    return !!this.get('place.id')
  }),

  billSet: computed.filter('payments', function(payment) {
    return !!payment.get('bill.id');
  }),
  bills: computed.sort('billSet', function(a, b) {
    if (moment(a.get('createdAt')) > moment(b.get('createdAt'))){
      return 1;
    } else if (moment(a.get('createdAt')) < moment(b.get('createdAt'))){
      return -1;
    } else {
      return 0;
    }
  }),
  rent: computed.filter('payments', function(payment) {
    return !!!payment.get('bill.id');
  })

});

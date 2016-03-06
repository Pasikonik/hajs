import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  amount: attr('number'),
  user: belongsTo('user'),
  bill: belongsTo('bill')
});

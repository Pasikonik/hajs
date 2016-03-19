import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  amount: attr('number'),
  status: attr('string'),
  user: belongsTo('user'),
  bill: belongsTo('bill'),
  createdAt: attr('date')
});

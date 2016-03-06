import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  concern: attr('string'),
  amount: attr('number'),
  deadline: attr('date'),
  state: attr('string'),
  place: belongsTo('place')
});

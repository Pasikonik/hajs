import DS from 'ember-data';

const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  concern: attr('string'),
  amount: attr('number'),
  deadline: attr('date'),
  state: attr('string'),
  place: belongsTo('place'),
  payments: hasMany('payments'),
  month: attr('string')
});

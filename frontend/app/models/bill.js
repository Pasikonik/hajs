import DS from 'ember-data';
import Ember from 'ember';

const { Model, attr, belongsTo, hasMany } = DS;
const { computed } = Ember;
const { alias } = computed;

export default Model.extend({
  concern: attr('string'),
  amount: attr('number'),
  deadline: attr('date'),
  state: attr('string'),
  place: belongsTo('place'),
  payments: hasMany('payments'),
  month: attr('string'),
  createdAt: attr('date')
});

import DS from 'ember-data';
import Ember from 'ember';

const { attr, belongsTo } = DS;
const { computed } = Ember;
const { alias } = computed;

export default DS.Model.extend({
  amount: attr('number'),
  status: attr('string'),
  user: belongsTo('user'),
  bill: belongsTo('bill'),
  createdAt: attr('date')
});

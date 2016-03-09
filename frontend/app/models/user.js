import Ember from 'ember';
import DS from 'ember-data';

const { Model, attr, hasMany } = DS;
const { computed } = Ember;

export default Model.extend({
  email: attr('string'),
  password: attr('string'),
  payments: hasMany('payment'),



});

import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  address: attr('string'),
  area: attr('number'),
  capacity: attr('number'),
  rent: attr('number'),
  payer: belongsTo('user'),
  bills: hasMany('bill'),
  users: hasMany('user')
});

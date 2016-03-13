import Ember from 'ember';
import moment from 'moment';

export function currentMonth() {
  return moment().format('MMMM');
}

export default Ember.Helper.helper(currentMonth);

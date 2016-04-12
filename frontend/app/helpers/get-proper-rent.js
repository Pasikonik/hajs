import Ember from 'ember';
import moment from 'moment';

export function getProperRent([rents, month]) {
  const result = rents.find((rent) => {
    return moment(rent.get('createdAt')).format('MM YYYY') === month;
  });
  return result;
}

export default Ember.Helper.helper(getProperRent);

import Ember from 'ember';
import moment from 'moment';

export function getProperBill([bills, id]) {
  const result = bills.find((bill) => {
    return bill.get('bill.id') === id;
  });
  return result;
}

export default Ember.Helper.helper(getProperBill);

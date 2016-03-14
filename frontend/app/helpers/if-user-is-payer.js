import Ember from 'ember';

export function ifUserIsPayer(params) {
  return params[0].get('email') === params[1].get('email');
}

export default Ember.Helper.helper(ifUserIsPayer);

import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

const { computed, inject } = Ember;
const { alias } = computed;

export default SessionService.extend({
  store: inject.service(),

  userEmail: alias('data.authenticated.email'),

  currentUser: computed('data.authenticated', function() {
    const users =  this.get('store').peekAll('user');
    return users.find((user) => {
      return user.get('email') === this.get('userEmail');
    });
  })
});

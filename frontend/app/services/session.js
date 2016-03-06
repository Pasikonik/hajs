import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

const { alias } = Ember.computed;

export default SessionService.extend({
  userEmail: alias('data.authenticated.email')
});

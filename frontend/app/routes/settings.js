import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model() {
    const email = this.get('session.userEmail');
    const promise =  this.store.queryRecord('user', { filter: { email: email } });
    return promise;
  }
});

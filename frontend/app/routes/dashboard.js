import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),
  
  model() {
    const email = this.get('session.userEmail');
    const userPromise = this.store.queryRecord('user', { filter: { email: email } });
    this.set('session.user', userPromise);
    return userPromise;
  },

  afterModel() {
    if (this.get('session.user.isRenter')) {
      this.transitionTo('places.place', this.get('session.user.place.id'));
    } else {
      this.transitionTo('places');
    }
  }
});

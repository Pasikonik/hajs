import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  session: inject.service(),

  actions: {
    joinToPlace(placeId) {
      const email = this.get('session.userEmail');
      this.store.queryRecord('user', { filter: { email: email } }).then((user) => {
        const place = this.store.peekRecord('place', placeId);
        user.set('place', place);
        user.save();
        this.transitionToRoute('places.place', placeId);
      });
    }
  }
});

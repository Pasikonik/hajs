import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),

  actions: {
    register(email, password) {
      var user = this.store.createRecord('user', {
        email: email,
        password: password
      });
      user.save().then(() => {
        this.get('session').authenticate('authenticator:devise', email, password);
      });
    }
  }
});

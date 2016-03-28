import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service(),

  actions: {
    authenticate: function() {
      let { email, password } = this.getProperties('email', 'password');
      return this.get('session').authenticate('authenticator:devise', email, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});

import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),
  notify: service(),

  actions: {
    register(email, password) {
      var user = this.store.createRecord('user', {
        email: email,
        password: password
      });
      user.save().then(() => {
        this.get('notify').success('successfully registered');
        this.get('session').authenticate('authenticator:devise', email, password).then(() => {
          this.get('notify').success('logged in...');
        });
      }).catch(() => {
        console.log('problems');
      });
    }
  }
});

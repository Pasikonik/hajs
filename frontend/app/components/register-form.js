import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    register() {
      let { email, password } = this.getProperties('email', 'password');
      this.attrs.register(email, password);
    }
  }
});

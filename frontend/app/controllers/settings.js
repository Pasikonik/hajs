import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  notify: inject.service(),

  actions: {
    submit() {
      this.get('model').save().then(() => {
        this.get('notify').success('Updated successfully!');
      });
    }
  }
});

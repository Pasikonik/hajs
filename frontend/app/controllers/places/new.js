import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {},

  actions: {
    save() {
      let model = this.store.createRecord('place', this.get('newModel'));
      this.set('newModel', {});
      model.save().then(() => {
        this.transitionToRoute('places.place', model);
      });
    }
  }
});

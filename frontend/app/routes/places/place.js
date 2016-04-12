import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('place', params.place_id);
  },

  setupController(controller, model) {
    controller.set('place', model);
    controller.set('month', moment().format('MM YYYY'));
  }
});

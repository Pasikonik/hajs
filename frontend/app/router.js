import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('registration');
  this.route('settings');

  this.route('places', function() {
    this.route('new');
    this.route('place', { path: ':place_id'}, function() {
      this.route('edit');
    });
  });

});

export default Router;

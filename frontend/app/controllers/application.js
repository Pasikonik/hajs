import Ember from 'ember';

const { inject, run, $ } = Ember;

export default Ember.Controller.extend({
  session: inject.service(),

  dropdownOpen: false,
  mobileMenu: false,

  actions: {
    toggleDropdown() {
      this.toggleProperty('dropdownOpen');
    },
    mobileMenu() {
      this.toggleProperty('mobileMenu');
    },
    logout() {
      this.get('session').invalidate();
    }
  }
});

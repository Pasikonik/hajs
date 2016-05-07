import Ember from 'ember';
import moment from 'moment';

const { inject, computed } = Ember;

export default Ember.Controller.extend({
  session: inject.service(),
  i18n: inject.service(),

  dropdownOpen: false,
  mobileMenu: false,

  locale: computed('i18n.locale', function() {
    return this.get('i18n.locale').toUpperCase();
  }),

  actions: {
    toggleDropdown() {
      this.toggleProperty('dropdownOpen');
    },
    mobileMenu() {
      this.toggleProperty('mobileMenu');
    },
    logout() {
      this.get('session').invalidate();
    },
    changeLocale() {
      const newLocale = this.get('locale') === 'PL' ? 'eng' : 'pl';
      this.set('i18n.locale', newLocale);
    }
  }
});

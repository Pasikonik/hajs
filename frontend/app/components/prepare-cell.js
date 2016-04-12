import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',

  click() {
    this.attrs.change(this.get('bill'));
  }
});

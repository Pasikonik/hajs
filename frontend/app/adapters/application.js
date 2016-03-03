import Ember from 'ember';
import DS from 'ember-data';
import ENV from "../config/environment";
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { get, $ } = Ember;

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: 'api/v1',
  authorizer: 'authorizer:devise',
  host: ENV.apiURL,

  pathForType: function(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  },

  urlForFindRecord(id, modelName, snapshot) {
    let url = this._super(...arguments);
    const query = get(snapshot, 'adapterOptions.query');
    if(query) {
      url += '?' + $.param(query);
    }
    return url;
  }
});

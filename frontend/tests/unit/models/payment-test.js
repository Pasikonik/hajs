import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment', 'Unit | Model | payment', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:bill']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

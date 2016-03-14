import { ifUserIsPayer } from 'frontend/helpers/if-user-is-payer';
import { module, test } from 'qunit';

module('Unit | Helper | if user is payer');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = ifUserIsPayer([42]);
  assert.ok(result);
});

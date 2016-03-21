on.input.in = function() {
  assert.strictEqual($.in, $.expect, $.msg);
  output({ out: $.get('in') });
}

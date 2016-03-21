on.input.in = function() {
  assert.strictEqual(input.in, input.expect, input.msg);
  output({ out: input.in });
}

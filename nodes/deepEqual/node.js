on.input.in = function() {
  assert.deepEqual(input.in, input.expect, input.msg);
  output({ out: input.in });
}

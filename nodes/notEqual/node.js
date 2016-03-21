on.input.in = function() {
  assert.notEqual(input.in, input.expect, input.msg);
  output({ out: input.in });
}

on.input.in = function() {
  assert.fail(input.in, input.expect, input.msg);
  output({ out: input.in });
}

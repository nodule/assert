on.input.in = function() {
  assert.equal(input.in, input.expect, input.msg);
  output({ out: input.in });
}

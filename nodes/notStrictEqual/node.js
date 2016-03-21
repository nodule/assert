on.input.in = function() {
  assert.notStrictEqual(input.in, input.expect, input.msg);
  output({ out: input.in });
}

on.input.in = function() {
  assert.notDeepEqual(input.in, input.expect, input.msg);
  output({ out: input.in });
}

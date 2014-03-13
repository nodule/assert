on.input.in = function() {
  assert.notDeepEqual(data, input.expect, input.msg);
  output({ out: data });
}

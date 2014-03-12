on.input.in = function() {
  assert.notEqual(data, input.expect, input.msg);
  cb({ out: data });
}

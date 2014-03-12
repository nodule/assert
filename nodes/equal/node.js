on.input.in = function() {
  assert.equal(data, input.expect, input.msg);
  cb({ out: data });
}

on.input.in = function() {
  assert.deepEqual(data, input.expect, input.msg);
  cb({ out: data });
}

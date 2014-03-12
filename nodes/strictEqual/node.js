on.input.in = function() {
  assert.strictEqual(data, input.expect, input.msg);
  cb({ out: data });
}

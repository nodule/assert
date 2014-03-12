on.input.in = function() {
  assert.notStrictEqual(data, input.expect, input.msg);
  cb({ out: data });
}

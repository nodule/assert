on.input.in = function() {
  assert.ifError($.in);
  output({ out: $.get('in') });
}

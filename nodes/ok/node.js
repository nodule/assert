on.input.in = function() {
  assert.ok($.in, $.msg);
  output({ out: $.get('in') });
}

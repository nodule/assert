on.input.in = function() {
  assert.fail($.in, $.expect, $.msg);
  output({ out: $.get('in') });
}

on.input.in = function() {
  assert.notEqual($.in, $.expect, $.msg);
  output({ out: $.get('in') });
}

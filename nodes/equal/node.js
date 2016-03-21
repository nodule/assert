on.input.in = function() {
  assert.equal($.in, $.expect, $.msg);
  output({ out: $.get('in') });
}

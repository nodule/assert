on.input.in = function() {
  assert.notStrictEqual($.in, $.expect, $.msg);
  output({ out: $.get('in') });
}

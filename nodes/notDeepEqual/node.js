on.input.in = function() {
  assert.notDeepEqual($.in, $.expect, $.msg);
  output({ out: $.get('in') });
}

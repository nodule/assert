on.input.in = function() {
  assert.deepEqual($.in, $.expect, $.msg);
  output({ out: $.in });
}

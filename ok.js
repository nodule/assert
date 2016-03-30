module.exports = {
  name: "ok",
  ns: "assert",
  async: true,
  description: "Tests if value is truthy",
  phrases: {
    active: "OK"
  },
  ports: {
    input: {
      "in": {
        title: "Actual",
        async: true,
        type: "any",
        fn: function __IN__(data, source, state, input, $, output, assert) {
          var r = function() {
            assert.ok($.in, $.msg);
            output({
              out: $.get('in')
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      msg: {
        title: "Message",
        type: "string",
        "default": "Not OK"
      }
    },
    output: {
      out: {
        title: "Actual",
        type: "any"
      }
    }
  },
  dependencies: {
    npm: {
      assert: require('assert')
    }
  },
  state: {}
}
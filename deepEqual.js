module.exports = {
  name: "deepEqual",
  ns: "assert",
  async: true,
  description: "Tests for deep equality.",
  phrases: {
    active: "Assert Deep Equal"
  },
  ports: {
    input: {
      "in": {
        title: "Actual",
        async: true,
        type: "any",
        fn: function __IN__(data, source, state, input, $, output, assert) {
          var r = function() {
            assert.deepEqual($.in, $.expect, $.msg);
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
      expect: {
        title: "Expect",
        type: "any"
      },
      msg: {
        title: "Message",
        type: "string",
        "default": "Not Deeply Equal"
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
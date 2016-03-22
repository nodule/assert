module.exports = {
  name: "equal",
  ns: "assert",
  async: true,
  description: "Tests shallow, coercive equality with the equal comparison operator ( == )",
  phrases: {
    active: "Assert Equal"
  },
  ports: {
    input: {
      "in": {
        title: "Actual",
        async: true,
        type: "any",
        fn: function __IN__(data, x, source, state, input, output, assert) {
          var r = function() {
            assert.equal($.in, $.expect, $.msg);
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
        "default": "Not Equal"
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
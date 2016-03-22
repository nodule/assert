module.exports = {
  name: "ifError",
  ns: "assert",
  async: true,
  description: "Tests if value is not a false value, throws if it is a true value. Useful when testing the error port.",
  phrases: {
    active: "Assert if Error"
  },
  ports: {
    input: {
      "in": {
        title: "Actual",
        async: true,
        type: "any",
        fn: function __IN__(data, x, source, state, input, output, assert) {
          var r = function() {
            assert.ifError($.in);
            output({
              out: $.get('in')
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
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
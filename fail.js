module.exports = {
  name: "fail",
  ns: "assert",
  async: true,
  description: "Throws an exception that displays the values for actual and expected",
  phrases: {
    active: "Assert Fail"
  },
  ports: {
    input: {
      "in": {
        title: "Actual",
        async: true,
        type: "any",
        fn: function __IN__(data, x, source, state, input, output, assert) {
          var r = function() {
            assert.fail(data, input.expect, input.msg);
            output({
              out: data
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
        "default": "Failed"
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
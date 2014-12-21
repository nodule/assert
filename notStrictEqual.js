module.exports = {
  name: "notStrictEqual",
  ns: "assert",
  async: true,
  description: "Tests strict non-equality, as determined by the strict not equal operator ( !== )",
  phrases: {
    active: "Assert Not Strict Equal"
  },
  ports: {
    input: {
      "in": {
        title: "Actual",
        async: true,
        type: "any",
        fn: function __IN__(data, x, source, state, input, output, assert) {
          var r = function() {
            assert.notStrictEqual(data, input.expect, input.msg);
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
        "default": "Strict Equal"
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
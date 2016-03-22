module.exports = {
  name: "notDeepEqual",
  ns: "assert",
  async: true,
  description: "Tests for any deep inequality.",
  phrases: {
    active: "Assert *not* Deep Equal"
  },
  ports: {
    input: {
      "in": {
        title: "Actual",
        async: true,
        type: "any",
        fn: function __IN__(data, x, source, state, input, output, assert) {
          var r = function() {
            assert.notDeepEqual($.in, $.expect, $.msg);
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
        "default": "Deep Equal"
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
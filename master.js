(function() {
  var Debug;

  Debug = {
    breakOn: function(obj, prop, mode) {
      var value;
      value = obj[prop];
      return Object.defineProperty(obj, prop, {
        get: function() {
          if (mode === "read") {
            debugger;
          }
          return value;
        },
        set: function(newValue) {
          debugger;
          return value = newValue;
        }
      });
    }
  };

  module.exports = Debug;

}).call(this);

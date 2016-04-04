var Validator = (function () {
  'use strict';
  return {
    app : {
      ifExists : function (appName, done) {
        var valid = (!!App[appName]?true:false);
        done(!!valid);
      }
    }
  }
})();

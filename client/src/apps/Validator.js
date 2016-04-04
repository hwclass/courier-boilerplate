var Validator = (function () {
  'use strict';
  return {
    app : {
      ifExists : function (appName) {
        var valid = (!!App[appName]?true:false);
      }
    }
  }
})();

var initializer = (function () {
  'use strict';
  return {
    app : {
      ifExists : function (appName) {
        return (!!App[appName]?true:false);
      }
    }
  }
})();

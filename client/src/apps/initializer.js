var initializer = (function () {
  'use strict';
  return {
    app : {
      ifExists : function (appName) {
        return (!!app[appName]?true:false);
      }
    }
  }
})();

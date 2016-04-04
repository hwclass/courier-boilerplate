App.header.addService('dummyText', function (context) {
  'use strict';
  return {
    getDummyText : function () {
    return 'This is a dummy text..';
    }
  }
});

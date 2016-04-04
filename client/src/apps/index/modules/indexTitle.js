App.index.addModule('indexTitle', function(context) {
  'use strict';
  var moduleEl;
  return {
    behaviors: ['indexEvents'],
    init : function () {
      console.log('Index module initialized.');
      moduleEl = context.getElement();
    },
    destroy : function () {
      moduleEl = null;
    }
  }
});

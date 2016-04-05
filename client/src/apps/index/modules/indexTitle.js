App.index.addModule('indexTitle', function(context) {
  'use strict';
  var moduleEl;
  return {
    behaviors: ['indexEvents'],
    init : function () {
      console.log('Index module initialized.');
      moduleEl = context.getElement();
      console.log(context.getGlobal('someGlobal'));
    },
    destroy : function () {
      moduleEl = null;
    }
  }
});

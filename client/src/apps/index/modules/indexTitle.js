app.index.addModule('indexTitle', function(context) {
  'use strict';
  return {
		behaviors: ['indexEvents'],
		init : function () {
      console.log('Index module initialized.');
    }
	}
});

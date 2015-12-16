app.index.addModule('indexTitle', function(context) {
  'use strict';
  return {
		behaviors: ['event'],
		init : function () {
      console.log('Index module initialized.');
    }
	}
});

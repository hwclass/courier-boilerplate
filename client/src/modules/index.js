app.addModule('index', function(context) {
  'use strict';
  return {
    behaviors: ['event'],
		init : function () {
      console.log('index module initialized.');
    }
	}
});

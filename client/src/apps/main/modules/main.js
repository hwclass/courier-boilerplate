app.main.addModule('main', function(context) {
  'use strict';
  return {
		behaviors: ['event'],
		init : function () {
      console.log('Main module initialized.');
    }
	}
});

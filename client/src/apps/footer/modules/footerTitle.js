app.footer.addModule('footerTitle', function(context) {
	'use strict';
	return {
		behaviors: ['event'],
		init : function () {
			console.log('Footer module initialized');
		}
	}
});

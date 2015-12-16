app.footer.addModule('footerTitle', function(context) {
	'use strict';
	return {
		behaviors: ['footerEvents'],
		init : function () {
			console.log('Footer module initialized');
		}
	}
});

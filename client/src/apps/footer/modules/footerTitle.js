app.footer.addModule('footerTitle', function(context) {
	'use strict';
	var moduleEl;
	return {
		behaviors: ['footerEvents'],
		init : function () {
			console.log('Footer module initialized');
			moduleEl = context.getElement();
		},
		destroy : function () {
			moduleEl = null;
		}
	}
});

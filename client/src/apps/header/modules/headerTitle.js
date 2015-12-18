app.header.addModule('headerTitle', function(context) {
	'use strict';
	var moduleEl;
	return {
		behaviors: ['headerEvents'],
		init : function () {
			console.log('Header module initialized');
			moduleEl = context.getElement();
		},
		destroy : function () {
			moduleEl = null;
		} 
	}
});

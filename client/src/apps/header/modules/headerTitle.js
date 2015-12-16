app.header.addModule('headerTitle', function(context) {
	'use strict';
	return {
		behaviors: ['headerEvents'],
		init : function () {
			console.log('Header module initialized');
		}
	}
});

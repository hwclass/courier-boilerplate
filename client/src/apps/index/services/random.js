app.index.addService('random', function (context) {
	'use strict';
	return {
		getRandom : function () {
			return Math.random();
		}
	}
});

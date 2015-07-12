'use strict';

Apps.Main.addService('random', function (context) {

	return {

		getRandom : function () {
			return Math.random();
		}

	} 

});
'use strict';

Apps.Header.addService('dummyText', function (context) {

	return {

		getDummyText : function () {
			return 'This is a dummy text as well..';
		}

	} 

});
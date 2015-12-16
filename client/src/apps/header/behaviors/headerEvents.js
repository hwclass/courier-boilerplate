app.header.addBehavior('headerEvents', function (context) {

	'use strict';

	var dummyTextService;

	return {

		init : function () {
			dummyTextService = context.getService('dummyText');
		},

		onclick : function (element, event, elementType) {
			//event.stopImmediatePropagation();
			var dummyText = dummyTextService.getDummyText();
			element.target.innerHTML = dummyText;
		}

	}

});

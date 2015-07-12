'use strict';

Apps.Header.addBehavior('event', function (context) {

	var dummyTextService;

	return {

		init : function () {
			dummyTextService = context.getService('dummyText');	
		},

		onclick : function (element, event, elementType) {
			event.stopImmediatePropagation();
			var dummyText = dummyTextService.getDummyText();
			element.target.innerHTML = dummyText;
		}
		
	} 

});
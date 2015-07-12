'use strict';

(function () {

	//starting main app
	Apps.Main.startAll();

	//invoking the init of the main module
	Apps.Main.init({
		debug : true,
		someGlobal : 'Hallelujah!'
	});

	Apps.Header.startAll();

	Apps.Header.init({
		debug : true
	});

})();
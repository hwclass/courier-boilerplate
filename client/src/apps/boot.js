(function () {

	'use strict';

	app.header.startAll();

	app.header.init({
		debug : true
	});

	//starting main app
	app.main.startAll();

	//invoking the init of the main module
	app.main.init({
		debug : true,
		someGlobal : 'Hallelujah!'
	});

})();

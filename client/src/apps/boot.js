'use strict';

/*header app*/
if (initializer.app.ifExists('header')) {
	app.header.startAll();
	app.header.init({debug : true});
}

/*index app*/
if (initializer.app.ifExists('index')) {
	app.index.startAll();
	app.index.init({
		debug : true,
		someGlobal : 'Hallelujah!'
	});
}

/*footer app*/
if (initializer.app.ifExists('footer')) {
	app.footer.startAll();
	app.footer.init({debug : true});
}

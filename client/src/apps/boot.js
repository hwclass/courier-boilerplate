'use strict';

app.header.startAll();

app.header.init({debug : true});

//starting main app
app.index.startAll();

//invoking the init of the main module
app.index.init({
	debug : true,
	someGlobal : 'Hallelujah!'
});

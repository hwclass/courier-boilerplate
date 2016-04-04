'use strict';

/*header app*/
if (initializer.app.ifExists('header')) {
  App.header.startAll();
  App.header.init({debug : true});
}

/*index app*/
if (initializer.app.ifExists('index')) {
  App.index.startAll();
  App.index.init({
    debug : true,
    someGlobal : 'Hallelujah!'
  });
}

/*about app*/
if (initializer.app.ifExists('about')) {
  App.about.startAll();
  App.about.init({
    debug : true,
    someGlobal : 'Hallelujah!'
  });
}

/*about app*/
if (initializer.app.ifExists('user')) {
  App.user.startAll();
  App.user.init({
    debug : true,
    someGlobal : 'Hallelujah!'
  });
}

/*footer app*/
if (initializer.app.ifExists('footer')) {
  App.footer.startAll();
  App.footer.init({debug : true});
}

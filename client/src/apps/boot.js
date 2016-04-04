'use strict';

/*header app*/
if (Validator.app.ifExists('header')) {
  App.header.startAll();
  App.header.init({debug : true});
}

/*index app*/
if (Validator.app.ifExists('index')) {
  App.index.startAll();
  App.index.init({
    debug : true,
    someGlobal : 'Hallelujah!'
  });
}

/*about app*/
if (Validator.app.ifExists('about')) {
  App.about.startAll();
  App.about.init({
    debug : true,
    someGlobal : 'Hallelujah!'
  });
}

/*about app*/
if (Validator.app.ifExists('user')) {
  App.user.startAll();
  App.user.init({
    debug : true,
    someGlobal : 'Hallelujah!'
  });
}

/*footer app*/
if (Validator.app.ifExists('footer')) {
  App.footer.startAll();
  App.footer.init({debug : true});
}

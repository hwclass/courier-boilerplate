'use strict';

var apps = ['index', 'about', 'header', 'footer', 'user'],
    appIndex = 0;

while (true) {
  if (!!App.hasOwnProperty(apps[appIndex])) {
    App[apps[appIndex]].startAll();
    App[apps[appIndex]].init({debug : true});
  }
  if (appIndex !== apps.length) {
    appIndex++;
  } else {
    break;
  }
}

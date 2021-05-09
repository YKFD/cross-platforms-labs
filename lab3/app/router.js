import EmberRouter from '@ember/routing/router';
import config from 'front-end/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('type', { path: ':type' }, () => {
    this.route('type/category', { path: ':type/:category' }, () => {
      this.route('type/category/post', { path: ':type/:category/:post' });
    });
  });
});

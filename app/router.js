import EmberRouter from '@ember/routing/router';
import config from 'my-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('services');
  this.route('contact');
  this.route('posts', function() {
    this.route("index", { path: '/' })
    this.route("new", { path: "/new" });
    this.route('post', { path: ":post_id" });
  });
  this.route('post');
  this.route('cars');
});

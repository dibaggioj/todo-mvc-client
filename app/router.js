import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('index', {path: '/'});
    this.resource('todos', { path: '/todos' }, function() {
        this.route('active');
        this.route('complete');
    });
});

export default Router;

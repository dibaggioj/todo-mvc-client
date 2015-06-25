import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var TodoMVCApp;

Ember.MODEL_FACTORY_INJECTIONS = true;

TodoMVCApp = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver: Resolver
});

loadInitializers(TodoMVCApp, config.modulePrefix);

export default TodoMVCApp;

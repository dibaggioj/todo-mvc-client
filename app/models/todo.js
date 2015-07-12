//import Ember from 'ember';
//import Resource from 'ember-jsonapi-resources/models/resource';
//import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';
//
//export default Resource.extend({
//    type: 'todos',
//    service: Ember.inject.service('todos'),
//    title: DS.attr('string'),
//    is_completed: DS.attr('boolean'),
//
//  /*
//  title: attr(),
//  date: attr(),
//
//  author: hasOne('author'),
//  comments: hasMany('comments')
//  */
//});

import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    is_completed: DS.attr('boolean'),
    //date_time: DS.attr('string')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Complete Ember.js Tutorial",
            is_completed: false
        },
        {
            id: 2,
            title: "Checkout some more ember stuff",
            is_completed: true
        },
        {
            id: 3,
            title: "Solve world hunger (with Ember)",
            is_completed: false
        }
    ]
});
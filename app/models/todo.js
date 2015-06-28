import DS from 'ember-data';
 
export default DS.Model.extend({
    title: DS.attr('string'),
    is_completed: DS.attr('boolean')
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
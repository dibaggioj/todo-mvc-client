import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        console.log("model hook called for index (all) route");
        console.log(this);
        return this.store.find('todo');
    },
    actions: {
        createTodo: function (newTitle) {
            console.log("create todo: " + newTitle);
            // Create the new todo model
            var todo = this.store.createRecord('todo', {
                title: newTitle,
                is_completed: false
            });

            console.log(todo);

            // Clear the "New Todo" text field
            // DELETE THESE LINES!!!
            // this.controllerFor('todos').set('newTitle', '');

            var logData = function (data) {
                console.log("promise");
                console.log(data);
            };

            var failure = function (reason) {
                console.log(reason);
            };

            // Save the new model
            //todo.save();
            todo.save().then(logData).catch(failure);
        },
        updateTodo: function (todo) {
            if (Ember.isEmpty(todo.get('title'))) {
                this.send('deleteTodo', todo);
            } else {
                todo.save();
            }
        },
        deleteTodo: function (todo) {
            todo.deleteRecord();
        }
    }
});
import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        console.log("model hook called for index (all) route");
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

            // Clear the "New Todo" text field
            // DELETE THESE LINES!!!
            // this.controllerFor('todos').set('newTitle', '');

            // Save the new model
            todo.save();
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
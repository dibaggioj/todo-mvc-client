import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        console.log("model hook called for active route");
        return this.store.filter('todo', function (todo) {
            console.log(todo);
            return !todo.get('is_completed');
        });
    },
    renderTemplate: function (controller, model) {
        this.render('todos.index', {
            model: model
        });
    }
});

import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        editTodo: function () {
            this.set('isEditing', true);
        },
        changeTodo: function () {
            this.set('isEditing', false);
            //this.sendAction('action', this.get("todo"));
            this.sendAction('acceptChanges', this.get("todo"));
        },
        deleteTodo: function (todo) {
            //this.sendAction('action', todo);
            this.sendAction('acceptDeletion', todo);
        }
    }
});

import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    //primaryKey: 'id',
    //serializeId: function(id) {
    //    return id.toString();
    //}
    extractArray: function(store, type, payload) {
        var data = [];
        console.log(store);
        console.log(type);
        console.log(payload);
        if (payload) {
            if (payload.data) {
                data = payload.data;
            }
        }
        return data;
    }
});
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    //primaryKey: 'id',
    //serializeId: function(id) {
    //    return id.toString();
    //}
    extractArray: function (store, type, payload) {
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
    },
    serialize: function (snapshot, options) {
        var json = {};

        snapshot.eachAttribute(function (name) {
            json[serverAttributeName(name)] = snapshot.attr(name);
        });

        snapshot.eachRelationship(function (name, relationship) {
            if (relationship.kind === 'hasMany') {
                json[serverHasManyName(name)] = snapshot.hasMany(name, { ids: true });
            }
        });

        console.log(json);
        return json;
    }
    //serialize: function (snapshot, options) {
    //    console.log(snapshot);
    //    console.log(options);
    //}
    //extractSave: function (store, typeClass, payload, id) {
    //    console.log(store);
    //    console.log(typeClass);
    //    console.log(payload);
    //    console.log(id);
    //
    //    var outputPayload = {
    //        json: payload
    //    };
    //    return this._super(store, typeClass, outoutPayload, id);
    //}
});

function serverAttributeName (attribute) {
    return attribute.underscore();
}

function serverHasManyName (name) {
    return serverAttributeName(name.singularize()) + "_ids";
}
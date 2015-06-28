import DS from 'ember-data';

export default DS.RESTSerializer.extend({
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

        if (options.includeId) {
            json.ID = snapshot.id;
        }

        console.log(json);
        return {'json': json};
    }
});

function serverAttributeName (attribute) {
    return attribute.underscore();
}

function serverHasManyName (name) {
    return serverAttributeName(name.singularize()) + "_ids";
}
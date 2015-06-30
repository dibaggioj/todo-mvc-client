import DS from 'ember-data';

var version = 1;

function namespaceAndVersion (v) {
    return "api" + "/v" + v;
}

export default DS.RESTAdapter.extend({
    host: "http://localhost:8000",
    namespace: namespaceAndVersion(version)
    //headers: {}
});

//export default DS.JsonApiAdapter.extend({
//    host: "http://localhost:8000",
//    namespace: namespaceAndVersion(version)
//    //headers: {}
//});

//
//import JsonApiAdapter from 'ember-json-api/json-api-adapter';
//
//export default JsonApiAdapter.extend({
//    host: "http://localhost:8000",
//    namespace: "api" + "/v1"
//    //headers: {}
//});
//
////import JsonApiAdapter from 'ember-json-api/json-api-adapter';
////export default JsonApiAdapter;
//
////export default DS.FixtureAdapter.extend({});
//import ApplicationAdapter from 'ember-jsonapi-resources/adapters/application';
//
//export default ApplicationAdapter.extend({
//  type: 'application',
//
//  url: /*config.APP.API_PATH + */ '/applications',
//
//  /*fetchUrl: function(url) {
//    const proxy = config.APP.API_HOST_PROXY;
//    const host = config.APP.API_HOST;
//    if (proxy && host) {
//      url = url.replace(proxy, host);
//    }
//    return url;
//  }*/
//});

import config from '../config/environment';

// app/adapters/application.js
import JsonApiAdapter from 'ember-json-api/json-api-adapter';
export default JsonApiAdapter.extend({
    host: config.APP.API.PATH,
    url: config.APP.API.PATH,
});
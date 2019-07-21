'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scope = require('@dekproject/scope');

var _influx = require('influx');

exports.default = function () {
    try {
        if (!process.env.hasOwnProperty('INFLUXDB_URI')) {
            console.log('[ InfluxDB ] - There is no INFLUXDB_URI variable in the .env file.');
        } else {
            _scope.$.set("influxdb", new _influx.InfluxDB(process.env.INFLUXDB_URI));
        }
    } catch (e) {
        console.log('[ InfluxDB ] - ' + e.message);
    }
};
//# sourceMappingURL=index.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scope = require('@dekproject/scope');

var _influxdbNodejs = require('influxdb-nodejs');

var _influxdbNodejs2 = _interopRequireDefault(_influxdbNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    try {
        if (!process.env.hasOwnProperty('INFLUXDB_URI')) {
            console.log('[ InfluxDB ] - There is no INFLUXDB_URI variable in the .env file.');
        } else {
            _scope.$.set("influxdb", new _influxdbNodejs2.default(process.env['INFLUXDB_URI']));
        }
    } catch (e) {
        console.log('[ InfluxDB ] - ' + e.message);
    }
};
//# sourceMappingURL=index.js.map
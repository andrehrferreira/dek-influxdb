# @dekproject/influxdb

InfluxDB interface plugin for DEK

What does this plugin do?

* Control configuration for connection to InfluxDB in production development mode in a simplified way with **dotenv**
* Performs connection implementation along the lines ES6 being pre requirement to start the project

## Instalation

```bash
$ yarn add @dekproject/influxdb --save
```

In the .env file add the following settings

```
INFLUXDB_URI=http://127.0.0.1:8086/mydb
```

## Usage

```js
import { $, influxdb } from "@dekproject/scope";

$.wait("influxdb").then(() => {
    influxdb.query(`SHOW DATABASES`).then(console.info).catch(console.error);
});
```

import { $ } from "@dekproject/scope";
import { InfluxDB } from 'influx';

export default () => {
    try{
        if(!process.env.hasOwnProperty('INFLUXDB_URI')){
            console.log('[ InfluxDB ] - There is no INFLUXDB_URI variable in the .env file.');
        }
        else{
            $.set("influxdb", new InfluxDB(process.env.INFLUXDB_URI));
        }
    }
    catch (e) {
        console.log(`[ InfluxDB ] - ${e.message}`);
    }
}

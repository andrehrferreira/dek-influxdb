import dotenv from "dotenv";
import { $, plugins, influxdb } from "@dekproject/scope";

(async () => {
    dotenv.config();
    await plugins("");

    $.wait("influxdb").then(() => {
        console.log("Connected");

        influxdb.query('http')
                .where('spdy', '1')
                .where('method', ['GET', 'POST'])
                .where('use', 300, '>=')
                .then(console.info)
                .catch(console.error);
    }).catch((e) => {
        console.log("The wait timeout was reached without loading the dependencies");
        process.exit(-1);
    });
})();

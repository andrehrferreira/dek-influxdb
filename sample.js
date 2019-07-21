import dotenv from "dotenv";
import { $, plugins, influxdb } from "@dekproject/scope";

(async () => {
    dotenv.config();
    await plugins("");

    $.wait("influxdb").then(() => {
        console.log("Connected");
        influxdb.query(`SHOW DATABASES`).then(console.info).catch(console.error);
    }).catch((e) => {
        console.log("The wait timeout was reached without loading the dependencies");
        process.exit(-1);
    });
})();

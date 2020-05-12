import {getConfig} from "../rest";

const config = {
    apiUrl: process.env.REACT_APP_API_URL,
    apiConfigRoute: process.env.REACT_APP_API_CONFIG_ROUTE,
};

export default {
    /**
     *
     * @returns {Promise<boolean>}
     */
    load: async () => {
        // console.log(config)
        let result = await getConfig(config.apiUrl + config.apiConfigRoute);
        console.log("load config result", result);
        config.tsLoaded = result.ts;
        return true;
    },
    /**
     *
     * @param key
     * @returns {*}
     */
    get: key => {
        return config[key]
    },
};
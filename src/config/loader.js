import rest from "../rest";
import config from "./index";

const apiUrl = process.env.REACT_APP_API_URL;
const apiConfigRoute = process.env.REACT_APP_API_CONFIG_ROUTE;

export default async () => {
    let result = await rest.getConfig(apiUrl + apiConfigRoute);
    console.log("load config result", result);
    config.loadData({
        apiUrl,
        ...result
    });
    return true;
}
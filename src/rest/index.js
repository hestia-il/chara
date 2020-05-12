import axios from "axios";
import config from "../config";

export default {
    getConfig: (url) => {

        return new Promise(resolve => {

            axios.get(url)
                .then(result => {

                    resolve(result.data)

                }).catch(err => {
                console.error(err);
                resolve({
                    error: err
                })
            })

        })

    },
    /**
     *
     * @param data
     * @returns {Promise<unknown>}
     */
    login: data => {

        return new Promise(resolve => {

            // axios.post("https://floating-caverns-42052.herokuapp.com/api/user/signin", data)
            axios.post(config.get("apiUrl") + "/user/signin", data)
                .then(result => {

                    resolve(result.data)

                }).catch(err => {
                console.error(err);
                resolve({
                    error: err
                })
            })

        })
    },
    /**
     *
     * @param data
     * @returns {Promise<unknown>}
     */
    register: data => {

        return new Promise(resolve => {

            // axios.post("https://floating-caverns-42052.herokuapp.com/api/user/signup", data)
            axios.post(config.get("apiUrl") + "/user/signup", data)
                .then(result => {

                    resolve(result.data)

                }).catch(err => {
                console.error(err);
                resolve({
                    error: err
                })
            })

        })
    }
}
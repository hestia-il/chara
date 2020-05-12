import axios from "axios";

export default {
    /**
     *
     * @param data
     * @returns {Promise<unknown>}
     */
    login: data => {

        return new Promise(resolve => {

            axios.post("https://floating-caverns-42052.herokuapp.com/api/user/signin", data)
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

            axios.post("https://floating-caverns-42052.herokuapp.com/api/user/signup", data)
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
import axios from "axios";

export const getConfig = (url) => {

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

};

const config = Object.create(null);

export default {
    /**
     *
     * @param data
     */
    loadData: data => {
        Object.assign(config, data)
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
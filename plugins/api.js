export default function ({ $axios }, inject) {
    const api = new API($axios)

    inject('api', api)
}

class API {
    constructor(axios) {
        this.axios = axios
    }

    // async getHoge() {
    //     const res = await this.axios.$get('https://jsondata.okiba.me/v1/json/oxmhS200816055834')
    //     // console.log(res)
    //     return res
    // }
    async getHoge() {
        await this.axios.$get('https://jsondata.okiba.me/v1/json/oxmhS200816055834').then(res => {
            const items = res
        })
        // console.log(res)
        return items
    }

}
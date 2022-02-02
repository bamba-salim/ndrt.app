import axios from "axios";

export default class CountriesApi {

    static api = axios.create({
        baseURL: 'https://restcountries.com/v3.1/'
    })

    static fetchAllCountries(){
        return this.api.get('all')
    }

}

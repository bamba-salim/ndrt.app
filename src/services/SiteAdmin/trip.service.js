import {GET, POST} from '../web.service'

export default class TripService {


    static fetchAllTrip = () => GET('fetch-all-trip')

    static createTrip = (values) => POST('create-trip', {tripDto: values})

    static fetchAllCountries = () => GET('fetch-all-select-countries');

    static fetchAllSelectCities = () => GET('fetch-all-select-cities');

}
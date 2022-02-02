import {GET, POST} from '../web.service'

export default class TripService {

    static fetchAllCities() {
        return GET('fetch-all-cities')
    }

    static createTrip(values) {
        return POST('create-trip', {tripDto: values})
    }
}

import {GET, POST} from '../web.service'

export default class TripService {

    static fetchAllCities = () => GET('fetch-all-cities')

    static fetchAllTrip = () => GET('fetch-all-trip')

    static createTrip = (values) => POST('create-trip', {tripDto: values})


}

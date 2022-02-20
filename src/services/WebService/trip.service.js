import {GET, POST, PUT} from './web.service'

export default class TripService {

    static fetchAllTrip = () => GET('fetch-all-trip');

    static createTrip = values => POST('create-trip', {tripDto: values});

    static fetchAllCountries = () => GET('fetch-all-select-countries');

    static fetchAllSelectCities = () => GET('fetch-all-select-cities');

    static fetchAllCities = () => GET('fetch-all-cities')

    static deleteCity = idCity => PUT('delete-city', {idCity: idCity})

    static fetchFiltredTrips = filters => POST('fetch-trip-with-filters', {filters})

    static addRSV = values => POST('add-new-rsv', {rsv: values});

    static fetchUserRSVs = idUser => GET(`fetch-user-reservations/${idUser}`)

    static fetchRSV = idRSV => GET(`fetch-reservation/${idRSV}`)

    static fetchAllRsv = () => GET("fetch-all-reservations")

}


export default class SiteUtils {

    static title = (page) => {
        document.title = `${page} | ${process.env.REACT_APP_SITE_NAME}`
    }

    static isNumeric(int) {
        return !isNaN(int - parseFloat(int));
    }

    static isEmptyStr(str) {
        return (!str || str.length === 0 );
    }

    static join_cities = (cities) => {
        var finale = [];
        cities.map(city => finale.push(city.name))
        return finale.join(' -> ')
    }
}

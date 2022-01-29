
export default class SiteUtils {
    static title = (page) => {
        document.title = `${page} | ${process.env.REACT_APP_SITE_NAME}`
    }

    static isNumeric(int) {
        return !isNaN(int - parseFloat(int));
    }
}

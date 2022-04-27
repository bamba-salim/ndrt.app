
export default class SiteUtils {

    static title = page => document.title = `${page} | ${this.siteNAme}`

    static isNumeric = int => !isNaN(int - parseFloat(int));

    static isEmptyStr = str => (!str || str.length === 0);

    static siteNAme = process.env.REACT_APP_SITE_NAME;

    static formatNumberToPrice = price =>new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price)

}

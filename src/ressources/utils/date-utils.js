import {DateTime} from "luxon";

export default class DateUtils {

    static FORMAT = {
        DDMMMYYYY: 'dd LLL y',
        toSQL: 'y-LL-dd hh:mm:ss'
    }

    static formated = (date) => {
        return DateTime.fromSQL(date).setLocale("fr").toFormat(this.FORMAT.DDMMMYYYY);
    }

    static now = () => {
        return DateTime.now().setLocale("fr").toFormat(this.FORMAT.toSQL);
    }

}

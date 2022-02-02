import {DateTime} from "luxon";

export default class DateUtils {

    static FORMAT = {
        DDMMMYYYY: 'dd LLL y',
        toSQL: 'y-LL-dd hh:mm:ss'
    }

    static formated = (date) => {
        return DateTime.fromSQL(date).setLocale("fr").toFormat(this.FORMAT.DDMMMYYYY);
    }

    static toSql = (date) => {
        return DateTime.fromSeconds(date).setLocale("fr").toISO()
    }

    static now = () => {
        return DateTime.now().setLocale("fr").toFormat("y-LL-dd");
    }


    static addDays(date, days) {
        return DateTime.fromISO(date).plus({days: days}).toFormat("y-LL-dd")
    }

}

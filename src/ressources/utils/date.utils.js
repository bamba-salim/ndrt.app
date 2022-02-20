import {DateTime} from "luxon";

export default class DateUtils {

    static FORMAT = {
        DDMMMYYYY: 'dd LLL y',
        toSQL: 'y-LL-dd hh:mm:ss',
        DD_MM_YYYY: 'dd/MM/y'
    }

    static formated = (date) => DateTime.fromSQL(date).setLocale("fr").toFormat(this.FORMAT.DDMMMYYYY);

    static formatedDDMMYYYY = (date) => DateTime.fromSQL(date).setLocale("fr").toFormat(this.FORMAT.DD_MM_YYYY);

    static formatedYYYYLLDD = (date) => DateTime.fromSQL(date).setLocale("fr").toFormat("y-LL-dd");

    static toSql = (date) => DateTime.fromSeconds(date).setLocale("fr").toISO()


    static NowSql = () => DateTime.now().toSQL()

    static now = () => DateTime.now().setLocale("fr").toFormat("y-LL-dd");


    static addDays = (date, days) => DateTime.fromISO(date).plus({days: days}).toFormat("y-LL-dd")


}

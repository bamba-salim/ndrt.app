import {NAME} from "./const-utils";

export default class SiteUtils {
    static title = (page) => {
        document.title = `${page} | ${NAME}`
    }
    static isParamsNumber(int){
        return !(parseInt(int) != int)
    }
}

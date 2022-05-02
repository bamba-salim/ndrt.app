import {PUT} from "../WebService/web.service";

export default class MigrateService {

    static migrateApp = () => PUT("migrate-db")
}
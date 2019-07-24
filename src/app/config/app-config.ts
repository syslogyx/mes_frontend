export class AppConfig {
    // define base URL
    // static readonly BASE_URL_HOST_PORT: string = "http://172.16.2.44:8080/api/";
    static readonly BASE_URL_HOST_PORT: string = "http://172.16.2.44:8089/mes/api/";
    static readonly BASE_URL: string = AppConfig.BASE_URL_HOST_PORT;

    //here we define only API related constants..
    static readonly MASTER: string = "masters";
    static readonly LIST: string = "list";
    static readonly SAVE: string = "save";
    static readonly STATUS: string = "status";
}

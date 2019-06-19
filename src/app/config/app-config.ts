export class AppConfig {
    // define base URL
    static readonly BASE_URL_HOST_PORT: string = "http://172.16.1.92:1000/";
    static readonly LOCAL_URL: string = "https://apiprojectmgmt.syslogyx.com/api/";
    static readonly LOCAL_URL_92: string = AppConfig.BASE_URL_HOST_PORT+"api/";
    static readonly BASE_URL: string = AppConfig.LOCAL_URL_92;


    static readonly USER_LOGIN: string = "authenticate";

    static readonly CREATE: string = "create";
    static readonly VIEW: string = "view";
    static readonly UPDATE: string = "update";
    static readonly LIST: string = "list";

    
    static readonly CLIENTS: string = "clients";
    static readonly CLIENT: string = "client";
    static readonly EOD: string = "eod";
    static readonly PROJECTS: string = "projects";
    static readonly PROJECT_DOCUMENT: string ="project-document";
    static readonly UPLOAD: string ="upload";
    
}

import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AppConfig } from "../config/app-config";
import { Observable } from "rxjs";
import { UtilityService } from "../common/utility.service";

@Injectable({
  providedIn: "root",
})
export class MasterSettingsService {
  httpOptions: HttpHeaders;
  constructor(private http: HttpClient, private utility: UtilityService) {
    // set headers.
    this.httpOptions = new HttpHeaders({
      // "X-AUTH-TOKEN": "",
      "Content-Type": "application/json",
    });
  }

  /**
   * Get Master Menu List by providing request body data
   * @param req
   */
  getMasterMenuList(req: object): Observable<any> {
    return this.http.post(
      AppConfig.BASE_URL + AppConfig.MASTER + "/" + AppConfig.LIST,
      req,
      { headers: this.httpOptions }
    );
  }

  /**
   * Get Master List with Pagination
   * @param req
   * @param queryParams
   * @param master_url
   */
  getMasterList(req: object, queryParams: object, master_url: string) {
    return this.http.post(
      AppConfig.BASE_URL +
        AppConfig.MASTER +
        "/" +
        master_url +
        "/" +
        AppConfig.LIST,
      req,
      {
        headers: this.httpOptions,
        params: this.utility.setQueryParams(queryParams),
      }
    );
  }

  /**
   * Create New Master
   * @param req
   * @param master_url
   */
  createMaster(req: object, master_url: string) {
    return this.http.post(
      AppConfig.BASE_URL +
        AppConfig.MASTER +
        "/" +
        master_url +
        "/" +
        AppConfig.SAVE,
      req,
      {
        headers: this.httpOptions,
      }
    );
  }

  /**
   * Update Master Status
   */
  // getMasterById(req: number) {
  //   return this.http.get(
  //     AppConfig.BASE_URL +
  //       AppConfig.MASTER +
  //       "/" +
  //       master_url +
  //       "/" +
  //       AppConfig.STATUS +
  //       "/" +
  //       req,
  //     {
  //       headers: this.httpOptions,
  //       params: this.utility.setQueryParams(queryParams),
  //     }
  //   );
  // }
}

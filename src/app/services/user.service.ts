import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions: HttpHeaders;

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) {
    authenticationService.currentUser.source.subscribe(data => {
      // set headers.      
      this.httpOptions = new HttpHeaders({
        "Content-Type": "application/json"
        // "X-AUTH-TOKEN": data && data.authToken ? data.authToken : ""
      });
    });
  }

  /**
* request server for logged in user EOD list.
*/
  getEODList(req: object, queryParams: object) {
    // return this._htc.get(this._baseURL);
    return this.http.post(
      AppConfig.BASE_URL + AppConfig.EOD + '/' + AppConfig.LIST, req,
      { headers: this.httpOptions, params: this.setQueryParams(queryParams) }
    );
  }

  /**
   * set HTTP Query params
   * @param paramObj 
   */
  protected setQueryParams(paramObj) {
    let httpParams = new HttpParams();
    Object.keys(paramObj).forEach(function (key) {
      httpParams = httpParams.append(key, paramObj[key]);
    });
    return httpParams;
  }
}

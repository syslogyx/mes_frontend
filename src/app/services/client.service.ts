import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  httpOptions: HttpHeaders;

  constructor(private authenticationService: AuthenticationService,
    private http: HttpClient) {
    authenticationService.currentUser.source.subscribe(data => {
      // set headers.      
      this.httpOptions = new HttpHeaders({
        "Content-Type": "application/json"
        // "X-AUTH-TOKEN": data && data.authToken ? data.authToken : ""
      });
    });
  }

  /**
 * request server for client list.
 */
  getClientList(queryParams: object) {
    // return this._htc.get(this._baseURL);
    return this.http.get(
      AppConfig.BASE_URL + AppConfig.CLIENTS,
      { headers: this.httpOptions, params: this.setQueryParams(queryParams) }
    );
  }

  /**
* request server for client creation.
*/
  createClient(request: object) {
    // return this._htc.get(this._baseURL);
    return this.http.post<any>(
      AppConfig.BASE_URL + AppConfig.CLIENT + "/" + AppConfig.CREATE, request,
      { headers: this.httpOptions }
    );
  }


  /**
* request server for client updation.
*/
  updateClient(id: number, request: object) {
    // return this._htc.get(this._baseURL);
    return this.http.put<any>(
      AppConfig.BASE_URL + AppConfig.CLIENT + "/" + id + "/" + AppConfig.UPDATE, request,
      { headers: this.httpOptions }
    );
  }

  /**
* request server for client Data by id.
*/
  getClientById(id: number) {
    // return this._htc.get(this._baseURL);
    return this.http.get(
      AppConfig.BASE_URL + AppConfig.CLIENT + "/" + id + "/" + AppConfig.VIEW,
      { headers: this.httpOptions }
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

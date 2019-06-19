import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  httpOptions: HttpHeaders;

  constructor(private authenticationService: AuthenticationService,
    private http: HttpClient) {
    authenticationService.currentUser.source.subscribe(data => {
      // set headers.      
      this.httpOptions = new HttpHeaders({
      });
    });
  }

  /**
* request server for Project list.
*/
  getProjectList(queryParams: object) {
    return this.http.get(
      AppConfig.BASE_URL + AppConfig.PROJECTS,
      { headers: this.httpOptions, params: this.setQueryParams(queryParams) }
    );
  }

  /**
* request server for project document creation.
*/
  createProjectDocument(request: object) {
    const formData: FormData = new FormData();
    formData.append('file', request['file']);
    formData.append('project_id', request['project_id']);
    formData.append('description', request['description']);
    formData.append('type', request['type']);
    formData.append('title', request['title']);
    return this.http.post<any>(
      AppConfig.BASE_URL + AppConfig.PROJECT_DOCUMENT + "/" + AppConfig.UPLOAD, formData,
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

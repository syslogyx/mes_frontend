import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppConfig } from 'src/app/config/app-config';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  /**
    * get current user data.
    */
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  /**
   * request server for login by providing following paramer:
   * @param email 
   * @param password 
   */
  requestLogin(email: string, password: string) {
    return this.http.post<any>(AppConfig.BASE_URL + AppConfig.USER_LOGIN, { email, password })
      .pipe(map(res => {
        console.log(res);
        // login successful if there's a jwt token in the response
        if (res.data && res.data.authToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(res.data));
          this.currentUserSubject.next(res.data);
        }

        return res.data;
      }));
  }

  /**
   * request for logout to the server and remove local storage data.
   */
  requestLogout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

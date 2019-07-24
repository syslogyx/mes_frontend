import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { AppConfig } from "../config/app-config";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>("test");
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
    // return this.http.post<any>(AppConfig.BASE_URL + AppConfig.USER_LOGIN, { email, password })
    //   .pipe(map(res => {
    //     console.log(res);
    //     if (res.data && res.data.authToken) {
    //       localStorage.setItem('currentUser', JSON.stringify(res.data));
    //       this.currentUserSubject.next(res.data);
    //     }
    //     return res.data;
    //   }));
  }

  /**
   * request for logout to the server and remove local storage data.
   */
  requestLogout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}

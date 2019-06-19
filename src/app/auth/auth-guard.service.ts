import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    const currentUser = this.authenticationService.currentUserValue;

    if (currentUser) {
      //check if logged in user has permission to access the route
      var stateUrl = state.url;
      if (state.url != '/') {
        stateUrl = state.url + "/";
      }

      var isAuthorised = this.checkUserAccess(stateUrl, currentUser);
      if (!isAuthorised) {
        this.router.navigate(['/page-not-found']);
        return false;
      }

      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    this.router.navigate(['/auth/login']);
    return false;
  }

  checkUserAccess(stateUrl, currentUser) {
    var menuResponse = currentUser.menu_list;
    var permGrpList = currentUser.permissionGroupList;
    var permissionTag = "";
    var temp = false;

    if (stateUrl) {
      for (let i = 0; i < menuResponse.length; i++) {
        if (menuResponse[i].url == stateUrl) {
          permissionTag = menuResponse[i].permissionTag;
        }
      }

      if (permissionTag) {
        for (let i = 0; i < permGrpList.length; i++) {
          if (permGrpList[i].name == permissionTag) {
            temp = true;
          }
        }
      }
    }
    // console.log(stateUrl,permissionTag,temp);

    return temp;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialog } from '@angular/material';
import { UserViewComponent } from '../../modules/users/user-view/user-view.component';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  public pushRightClass: string;
  loggedInUser: any;
  private _opened: boolean = false;

  constructor(
    private router: Router,
    private authenticationService : AuthenticationService,
    public dialog: MatDialog
  ) { 
    
    this.loggedInUser = this.authenticationService.currentUserValue;
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.pushRightClass = "push-right";
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector("body");
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector("body");
    dom.classList.toggle(this.pushRightClass);
  }

  logout() {
    this.authenticationService.requestLogout();
    this.router.navigate(["/auth/login"]);
    // window.location.reload();
  }

  /**
   * For showing user profile
   */
  showUserProfile(){
    const dialogRef = this.dialog.open(UserViewComponent, {
      width: '400px',
      data: this.loggedInUser
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // private _toggleSidebar() {
  //   this._opened = !this._opened;
  // }

}

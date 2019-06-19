import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserViewComponent } from '../../modules/users/user-view/user-view.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;

  @Output() collapsedEvent = new EventEmitter<boolean>();
  currentUser: any;
  menuList: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private dialog : MatDialog
  ) {

    this.currentUser = this.authenticationService.currentUserValue;
    this.menuList = (this.currentUser && this.currentUser.hasOwnProperty('menu_list') ? this.modifyMenuList(this.currentUser) : null);

    console.log("Logged in user : ", this.currentUser);
  }

  ngOnInit() {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  /**
   * Modify menu response here 
   * @param menuResponse 
   */
  modifyMenuList(response) {
    var menuResponse = response.menu_list;
    var permGrpList = response.permissionGroupList;
    if (menuResponse) {
      var menuPermList = this.getMenuPermList(menuResponse, permGrpList);


      var resultMenuList = [];
      for (let i = 0; i < menuPermList.length; i++) {
        if (menuPermList[i].id == menuPermList[i].parent_id) {
          resultMenuList.push(menuPermList[i]);
        }
      }

      for (let i = 0; i < menuPermList.length; i++) {
        for (let j = 0; j < resultMenuList.length; j++) {

          if (!resultMenuList[j].hasOwnProperty('child_menu')) {
            resultMenuList[j].child_menu = [];
            break;
          }

          if ((resultMenuList[j].id == menuPermList[i].parent_id)) {
            if (resultMenuList[j].id != menuPermList[i].id) {
              if (!this.childExists(resultMenuList[j].child_menu, menuPermList[i])) {
                resultMenuList[j].child_menu.push(menuPermList[i]);
                break;
              }
            }

          }
        }
      }

      // console.log("resultMenuList : ", resultMenuList);
      return resultMenuList;

    }
  }

  /**
   * Check if child already exists
   * @param childList 
   * @param childEle 
   */
  childExists(childList, childEle) {
    var temp = false;
    if (childList) {
      for (let i = 0; i < childList.length; i++) {
        if (childList[i].id == childEle.id) {
          temp = true;
        }

      }
    }
    return temp;
  }

  /**
   * Check if menu items matches with available permissions
   * @param menuResponse 
   * @param permGrpList 
   */
  getMenuPermList(menuResponse, permGrpList) {
    if (menuResponse) {
      var menuPermList = [];
      for (let i = 0; i < menuResponse.length; i++) {
        for (let k = 0; k < permGrpList.length; k++) {
          if ((menuResponse[i].permissionTag == permGrpList[k].name) || (menuResponse[i].permissionTag == "")) {
            menuPermList.push(menuResponse[i]);
            break;
          }
        }
      }
      return menuPermList;
    }
  }

  logout() {
    this.authenticationService.requestLogout();
    this.router.navigate(["/auth/login"]);
    // window.location.reload();
  }

  /**
   * For showing user profile
   */
  showUserProfile() {
    const dialogRef = this.dialog.open(UserViewComponent, {
      width: '400px',
      data: this.currentUser
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

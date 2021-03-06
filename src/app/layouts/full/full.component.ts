import * as $ from "jquery";
import { MediaMatcher } from "@angular/cdk/layout";
import { Router } from "@angular/router";
import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit,
} from "@angular/core";
import { MenuItems } from "../../shared/menu-items/menu-items";
import { AppHeaderComponent } from "./header/header.component";
import { AppSidebarComponent } from "./sidebar/sidebar.component";

import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { AppConstants } from "../../config/app-constants";
/** @title Responsive sidenav */
@Component({
  selector: "app-full-layout",
  templateUrl: "full.component.html",
  styleUrls: [],
})
export class FullComponent implements OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;
  dir = "ltr";
  green: boolean;
  blue: boolean;
  dark: boolean;
  minisidebar: boolean;
  boxed: boolean;
  danger: boolean;
  showHide: boolean;
  sidebarOpened;
  appVersionNo: string;

  public config: PerfectScrollbarConfigInterface = {};
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia("(min-width: 768px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.appVersionNo = AppConstants.VERSION;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {
    // This is for the topbar search
    (<any>$(".srh-btn, .cl-srh-btn")).on("click", function() {
      (<any>$(".app-search")).toggle(200);
    });
    // This is for the megamenu
  }

  // Mini sidebar
}

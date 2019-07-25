import { Injectable } from "@angular/core";
import { MasterSettingsService } from "../../services/master-settings.service";
import { MasterSettings } from "../../models/master-settings";
import { UtilityService } from "../../common/utility.service";

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  // Theme menus starts
  // {
  //   state: '',
  //   name: 'Personal',
  //   type: 'saperator',
  //   icon: 'av_timer'
  // },
  // {
  //   state: 'dashboards',
  //   name: 'Dashboards',
  //   type: 'sub',
  //   icon: 'av_timer',
  //   children: [
  //     { state: 'dashboard1', name: 'Dashboard 1', type: 'link' },
  //     { state: 'dashboard2', name: 'Dashboard 2', type: 'link' }
  //   ]
  // },
  // {
  //   state: 'material',
  //   name: 'Material Ui',
  //   type: 'sub',
  //   icon: 'bubble_chart',
  //   badge: [{ type: 'red', value: '17' }],
  //   children: [
  //     { state: 'badge', name: 'Badge', type: 'link' },
  //     { state: 'button', name: 'Buttons', type: 'link' },
  //     { state: 'cards', name: 'Cards', type: 'link' },
  //     { state: 'grid', name: 'Grid List', type: 'link' },
  //     { state: 'lists', name: 'Lists', type: 'link' },
  //     { state: 'menu', name: 'Menu', type: 'link' },
  //     { state: 'tabs', name: 'Tabs', type: 'link' },
  //     { state: 'stepper', name: 'Stepper', type: 'link' },
  //     { state: 'ripples', name: 'Ripples', type: 'link' },
  //     { state: 'expansion', name: 'Expansion Panel', type: 'link' },
  //     { state: 'chips', name: 'Chips', type: 'link' },
  //     { state: 'toolbar', name: 'Toolbar', type: 'link' },
  //     { state: 'progress-snipper', name: 'Progress snipper', type: 'link' },
  //     { state: 'progress', name: 'Progress Bar', type: 'link' },
  //     { state: 'dialog', name: 'Dialog', type: 'link' },
  //     { state: 'tooltip', name: 'Tooltip', type: 'link' },
  //     { state: 'snackbar', name: 'Snackbar', type: 'link' },
  //     { state: 'slider', name: 'Slider', type: 'link' },
  //     { state: 'slide-toggle', name: 'Slide Toggle', type: 'link' }
  //   ]
  // },
  // {
  //   state: 'apps',
  //   name: 'Apps',
  //   type: 'sub',
  //   icon: 'apps',
  //   children: [
  //     { state: 'calendar', name: 'Calendar', type: 'link' },
  //     { state: 'messages', name: 'Mail box', type: 'link' },
  //     { state: 'chat', name: 'Chat', type: 'link' },
  //     { state: 'taskboard', name: 'Taskboard', type: 'link' }
  //   ]
  // },
  // {
  //   state: '',
  //   name: 'Forms, Table & Widgets',
  //   type: 'saperator',
  //   icon: 'av_timer'
  // },
  // {
  //   state: 'forms',
  //   name: 'Forms',
  //   type: 'sub',
  //   icon: 'insert_drive_file',
  //   children: [
  //     { state: 'form-layout', name: 'Form-Layout', type: 'link' },
  //     { state: 'autocomplete', name: 'Autocomplete', type: 'link' },
  //     { state: 'checkbox', name: 'Checkbox', type: 'link' },
  //     { state: 'radiobutton', name: 'Radio Button', type: 'link' },
  //     { state: 'datepicker', name: 'Datepicker', type: 'link' },
  //     { state: 'select', name: 'Select', type: 'link' },
  //     { state: 'formfield', name: 'Form Field', type: 'link' },
  //     { state: 'input', name: 'Inputs', type: 'link' },
  //     { state: 'tree', name: 'Tree', type: 'link' },
  //     { state: 'editor', name: 'Editor', type: 'link' },
  //     { state: 'form-validation', name: 'Form Validation', type: 'link' },
  //     { state: 'file-upload', name: 'File Upload', type: 'link' },
  //     { state: 'wizard', name: 'Wizard', type: 'link' },
  //     { state: 'paginator', name: 'Paginator', type: 'link' },
  //     { state: 'sortheader', name: 'Sort Header', type: 'link' }
  //   ]
  // },
  // {
  //   state: 'tables',
  //   name: 'Tables',
  //   type: 'sub',
  //   icon: 'web',
  //   children: [
  //     { state: 'basictable', name: 'Basic Table', type: 'link' },
  //     { state: 'filterable', name: 'Filterable Table', type: 'link' },
  //     { state: 'pagination', name: 'Pagination Table', type: 'link' },
  //     { state: 'sortable', name: 'Sortable Table', type: 'link' },
  //     { state: 'mix', name: 'Mix Table', type: 'link' },
  //     { state: 'smarttable', name: 'Smart Table', type: 'link' }
  //   ]
  // },
  // {
  //   state: 'datatables',
  //   name: 'Data Tables',
  //   type: 'sub',
  //   icon: 'border_all',
  //   children: [
  //     { state: 'basicdatatable', name: 'Basic Data Table', type: 'link' },
  //     { state: 'filter', name: 'Filterable', type: 'link' },
  //     { state: 'editing', name: 'Editing', type: 'link' },
  //     { state: 'materialtable', name: 'Material Table', type: 'link' }
  //   ]
  // },
  // {
  //   state: 'widgets',
  //   name: 'Widgets',
  //   type: 'link',
  //   icon: 'widgets'
  // },
  // {
  //   state: '',
  //   name: 'Extra Component',
  //   type: 'saperator',
  //   icon: 'av_timer'
  // },
  // {
  //   state: 'authentication',
  //   name: 'Authentication',
  //   type: 'sub',
  //   icon: 'perm_contact_calendar',
  //   children: [
  //     { state: 'login', name: 'Login', type: 'link' },
  //     { state: 'register', name: 'Register', type: 'link' },
  //     { state: 'forgot', name: 'Forgot', type: 'link' },
  //     { state: 'lockscreen', name: 'Lockscreen', type: 'link' },
  //     { state: '404', name: 'Error', type: 'link' }
  //   ]
  // },
  // {
  //   state: 'charts',
  //   name: 'Charts',
  //   type: 'sub',
  //   icon: 'insert_chart',
  //   children: [
  //     { state: 'chartjs', name: 'Chart Js', type: 'link' },
  //     { state: 'chartistjs', name: 'Chartist Js', type: 'link' },
  //     { state: 'ngxchart', name: 'Ngx Charts', type: 'link' }
  //   ]
  // },
  // {
  //   state: 'pages',
  //   name: 'Pages',
  //   type: 'sub',
  //   icon: 'content_copy',
  //   children: [
  //     { state: 'timeline', name: 'Timeline', type: 'link' },
  //     { state: 'invoice', name: 'Invoice', type: 'link' },
  //     { state: 'pricing', name: 'Pricing', type: 'link' },
  //     { state: 'helper', name: 'Helper Classes', type: 'link' },
  //     {
  //       state: 'icons',
  //       name: 'Icons',
  //       type: 'subchild',
  //       subchildren: [
  //         {
  //           state: 'material',
  //           name: 'Material Icons',
  //           type: 'link'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   state: 'multi',
  //   name: 'Menu Levels',
  //   icon: 'star',
  //   type: 'sub',
  //   children: [
  //     {
  //       state: 'second-level',
  //       name: 'Second Level',
  //       type: 'link'
  //     },
  //     {
  //       state: 'third-level',
  //       name: 'Second Level',
  //       type: 'subchild',
  //       subchildren: [
  //         {
  //           state: 'third-level',
  //           name: 'Third Level',
  //           type: 'link'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'third-level',
  //       name: 'aSecond Level',
  //       type: 'subchild',
  //       subchildren: [
  //         {
  //           state: 'athird-level',
  //           name: 'Third Level',
  //           type: 'link'
  //         }
  //       ]
  //     }
  //   ]
  // },
  //Theme menu ends
  // Other Menus Starts here
  {
    state: 'dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'av_timer'
  },
  {
    state: 'production_status',
    name: 'Production Status',
    type: 'link',
    icon: 'show_chart'
  },
  {
    state: 'coils_to_process',
    name: 'Coils To Process',
    type: 'link',
    icon: 'panorama_fish_eye'
  },
  {
    state: 'shift_production_log_book',
    name: 'Shift Prod. Log Book',
    type: 'link',
    icon: 'book'
  },
  //Other menus ends here
  //Master Setting Menus starts
  {
    state: "",
    name: "Settings",
    type: "saperator",
    icon: "av_timer",
  }
  // Master Settings Menus ends
];

@Injectable()
export class MenuItems {
  masterMenuList: any[] = [];
  constructor(
    private masterService: MasterSettingsService,
    private utility: UtilityService
  ) {
    this.getMasterMenus();
  }
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

  /**
   * Get Master Menus by providing the post request body
   */
  getMasterMenus() {
    let req: object = {
      include_inactive_data: true,
    };

    this.masterService.getMasterMenuList(req).subscribe(
      data => {
        let dt: any = data;
        if (data) {
          this.masterMenuList = data.response;
          this.modifyMasterMenuList(this.masterMenuList);
        }
      },
      error => {
        console.log("Server error :", error);
        this.utility.openSnackBar("Something went wrong!!", "");
      }
    );
  }

  /**
   * Modify server Menu List and return the modified data
   * @param list
   */
  modifyMasterMenuList(list: any[]) {
    if (list) {
      var length = list.length;
      for (let i = 0; i < list.length; i++) {
        list[i].state = list[i].path;
        list[i].type = "link";
      }

      let menuData = {
        state: "master",
        name: "Master",
        type: "sub",
        icon: "settings",
        children: list,
      };
      MENUITEMS.push(menuData);
    }
  }
}

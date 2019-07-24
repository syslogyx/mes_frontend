import { Component, OnInit } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { MasterSettingsService } from "../../../../services/master-settings.service";
import { UtilityService } from "../../../../common/utility.service";
// Start For 1
export interface PeriodicElement {
  group_code: string;
  group_desc: string;
  incrementor: number;
  updated_by_name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
  {
    group_code: "abc",
    group_desc: "Hydrogen",
    incrementor: 1.0079,
    updated_by_name: "H",
  },
];

@Component({
  selector: "app-code-group",
  templateUrl: "./code-group.component.html",
  styleUrls: ["./code-group.component.css"],
})
export class CodeGroupComponent implements OnInit {
  public quickFindform: FormGroup;
  masterList: any[];
  dataSource: any[];
  // Start 1
  constructor(
    breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private masterService: MasterSettingsService,
    private utility: UtilityService
  ) {
    breakpointObserver.observe(["(max-width: 600px)"]).subscribe(result => {
      // For 1
      this.displayedColumns = result.matches
        ? [
            "sr_no",
            "group_code",
            "group_desc",
            "incrementor",
            "updated_by_name",
            "status",
            "action",
          ]
        : [
            "sr_no",
            "group_code",
            "group_desc",
            "incrementor",
            "updated_by_name",
            "status",
            "action",
          ];
    });
  }
  displayedColumns: string[] = [
    "sr_no",
    "group_code",
    "group_desc",
    "incrementor",
    "updated_by_name",
    "status",
    "action",
  ];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  currentPage: number = 1;
  pageSize: number = 10;
  total: number;
  pageSizeOptions: any[] = [5, 10, 20];
  // End 1

  ngOnInit() {
    this.quickFindform = this.fb.group({
      quick_find: [null, Validators.compose([Validators.required])],
    });
    this.getMasterList();
  }

  /**
   * page change event and change event of limit per page.
   * @param e
   */
  pagination(e) {
    console.log("change event",e);
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    this.getMasterList();
  }

  /**
   * get client list according to pagination
   */
  getMasterList() {
    //create pagination object.
    let pagination: any = {
      page: this.currentPage,
      limit: this.pageSize,
    };

    let request = {
      // "quick_finder": "",
      include_inactive_data: true,
    };

    let masterType = "code_group";
    this.masterService.getMasterList(request, pagination, masterType).subscribe(
      data => {
        let dt: any = data;
        if (data) {
          this.masterList = dt.response.list;
          this.dataSource = this.masterList;
          this.total = dt.response.pagination.count;
          console.log(this.dataSource);
        }
      },
      error => {
        this.utility.openSnackBar(error.error.message, "");
      }
    );
  }

  onSubmit(){
    
  }
}

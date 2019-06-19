import { Component, OnInit, Inject } from '@angular/core';
import { UtilityService } from '../../../common/utility.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatTableDataSource } from '@angular/material';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-project-list-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.css']
})
export class ProjectListViewComponent implements OnInit {
  selectedProjData: any;
  currentPage: number = 1;
  pageSize: number = 10;
  dataSource: any;
  projectList: any[];
  displayedColumns = ['sr_no', 'name', 'status', 'client', 'start_date', 'end_date'];
  total: number;

  constructor(
    public dialogRef: MatDialogRef<ProjectListViewComponent>,
    private projectService: ProjectService,
    private utility: UtilityService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log("List data", data);
    this.dataSource = data;
    this.getProjectList();
  }

  ngOnInit() {
  }

  /**
* get project list from server by proving it's pagination info
*/
  getProjectList() {
    let pagination: any = {
      page: this.currentPage,
      limit: this.pageSize
    };
    this.projectService.getProjectList(pagination).subscribe(
      data => {
        let dt: any = data;
        if (data) {
          this.projectList = this.modifyListResponse(dt.data.data);
          this.dataSource = new MatTableDataSource(this.projectList);
          this.total = dt.data.total;
        }
      }, error => {
        this.utility.openSnackBar(error.error.message, '');
      });
  }

  /**
   * page change event and change event of limit per page.
   * @param e 
   */
  pagination(e) {
    console.log("change event");
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    this.getProjectList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  modifyListResponse(listRes) {
    if (listRes) {
      var result = [];
      for (let i = 0; i < listRes.length; i++) {
        result.push({
          "id": listRes[i].id,
          "name": listRes[i].name,
          "start_date": listRes[i].start_date,
          "end_date": listRes[i].due_date,
          "status": listRes[i].status_id,
          "client": listRes[i].client.name,
        })
      }
      return result;
    }
  }

}

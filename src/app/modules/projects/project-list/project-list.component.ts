import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../common/utility.service';
import { ProjectService } from '../../../services/project.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ProjectDocumentComponent } from '../project-document/project-document.component';
import { ProjectListViewComponent } from '../project-list-view/project-list-view.component';
import { ProjectDocumentListComponent } from '../project-document-list/project-document-list.component';
import { PdfService } from '../../../services/pdf.service';
import { ExcelService } from '../../../services/excel.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  currentPage: number = 1;
  pageSize: number = 10;
  dataSource: any;
  projectList: any[];
  displayedColumns = ['sr_no', 'name', 'status', 'client', 'start_date', 'end_date', 'action'];
  total: number;
  pageSizeOptions: any[] = [5, 10, 20];

  constructor(
    private projectService: ProjectService,
    private utility: UtilityService,
    private dialog: MatDialog,
    private excelService: ExcelService,
    private pdfService: PdfService
  ) { }

  ngOnInit() {
    this.getProjectList();
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
          "project_document": listRes[i].project_document,
        })
      }
      return result;
    }
  }

  uploadProjectDoc(projectData) {
    const dialogRef = this.dialog.open(ProjectDocumentComponent, {
      width: '400px',
      data: projectData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.getProjectList();
    });
  }

  /**
   * Show Project List in Dialog
   */
  showProjectList() {
    const dialogRef = this.dialog.open(ProjectListViewComponent, {
      width: '1000px',
      // height: '600px',
      data: this.dataSource
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  /**
   * Show Project Document List in Dialog
   */
  showProjectDocList(list) {
    const dialogRef = this.dialog.open(ProjectDocumentListComponent, {
      width: '500px',
      // height: '600px',
      data: list
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  /**
  * Export as excel format
  */
  exportAsExcel(): void {
    var excelData = this.setExcelExportData(this.projectList);
    this.excelService.exportAsExcelFile(excelData);
  }

  /**
   * Set Excel data before exorting
   * @param list 
   */
  setExcelExportData(list) {
    if (list) {
      var title = "Project List"
      var header = ["Sr", "Name", "Status", "Client", "Start Date", "End Date"];
      var body = [];
      for (let i = 0; i < list.length; i++) {
        body.push([
          ((i + 1) <= 9 ? ' ' + (i + 1) : i + 1),
          (list[i].hasOwnProperty('name') ? list[i].name : ''),
          (list[i].hasOwnProperty('status') ? list[i].status : ''),
          (list[i].hasOwnProperty('client') ? list[i].client : ''),
          (list[i].hasOwnProperty('start_date') ? list[i].start_date : ''),
          (list[i].hasOwnProperty('end_date') ? list[i].end_date : ''),
        ])
      }

      var data = {
        title: title,
        header: header,
        body: body,
        excel_last_cell: 'F',
      };
      return data;
    }
  }

  /**
   * Export as pdf format
   */
  exportAsPdf() {
    this.pdfService.exportAsPdfFile(this.setHeaderColumn(this.projectList), this.projectList, 'Project List');
  }

  /**
 * Set Pdf Table Header Column here
 * @param eodRes 
 */
  setHeaderColumn(eodRes) {
    if (eodRes) {
      var result = [
        { header: 'Name', dataKey: 'name' },
        { header: 'Client', dataKey: 'client' },
        { header: 'Status', dataKey: 'status' },
        { header: 'Start Date', dataKey: 'start_date' },
        { header: 'End Date', dataKey: 'end_date' },
      ];
      return result;
    }
  }

}

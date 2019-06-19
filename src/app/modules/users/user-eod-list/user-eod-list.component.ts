import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UtilityService } from '../../../common/utility.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ExcelService } from '../../../services/excel.service';
import { PdfService } from '../../../services/pdf.service';

@Component({
  selector: 'app-user-eod-list',
  templateUrl: './user-eod-list.component.html',
  styleUrls: ['./user-eod-list.component.css']
})
export class UserEodListComponent implements OnInit {
  eodList: any;
  todayDate: any;
  loggedInUser: any;
  currentPage: number = 1;
  pageSize: number = 10;
  displayedColumns = ['sr_no', 'name', 'date', 'status'];
  dataSource: any;
  total: number;
  pageSizeOptions: any[] = [5, 10, 20];
  @ViewChild(MatSort) sort: MatSort;



  constructor(
    private userService: UserService,
    private utility: UtilityService,
    private authenticationService: AuthenticationService,
    private excelService: ExcelService,
    private pdfService: PdfService
  ) {
    var dateObj = new Date();
    this.todayDate = this.utility.formatDate(dateObj, "yy-mm-dd");
    this.loggedInUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.getEodList();
  }

  /**
   * get user eod list according to logged in user info
   */
  getEodList() {
    //create pagination object.
    let req: any = {
      "user_id": this.loggedInUser.id,
      // "date": this.todayDate
    }

    let pagination: any = {
      page: this.currentPage,
      limit: this.pageSize
    };
    this.userService.getEODList(req, pagination).subscribe(
      data => {
        let dt: any = data;
        if (data) {
          this.eodList = dt.data.data;
          this.eodList = this.modifyEodResponse(dt.data.data);
          this.dataSource = new MatTableDataSource(this.eodList);

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
    this.getEodList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  modifyEodResponse(eodRes) {
    if (eodRes) {
      var result = [];
      for (let i = 0; i < eodRes.length; i++) {
        result.push({
          "name": eodRes[i].user.name,
          "date": eodRes[i].date,
          "status": eodRes[i].status_id,
        })
      }
      return result;
    }
  }

  /**
   * Export as excel format
   */
  exportAsExcel(): void {
    var excelData = this.setExcelExportData(this.eodList);
    console.log("excelData", excelData);
    this.excelService.exportAsExcelFile(excelData);
  }

  /**
   * Set Excel data before exorting
   * @param list 
   */
  setExcelExportData(list) {
    if (list) {
      var title = "Eod History"
      var header = ["Sr", "Name", "Date", "Status"];
      var body = [];
      for (let i = 0; i < list.length; i++) {
        body.push([
          ((i + 1) <= 9 ? ' ' + (i + 1) : i + 1),
          (list[i].hasOwnProperty('name') ? list[i].name : ''),
          (list[i].hasOwnProperty('date') ? list[i].date : ''),
          (list[i].hasOwnProperty('status') ? list[i].status : ''),
        ])
      }

      var data = {
        title: title,
        header: header,
        body: body,
        excel_last_cell: 'D',
      };
      return data;
    }
  }

  /**
   * Export as pdf format
   */
  exportAsPdf() {
    this.pdfService.exportAsPdfFile(this.setHeaderColumn(this.eodList), this.eodList, 'Eod_History');
  }

  /**
 * Set Pdf Table Header Column here
 * @param eodRes 
 */
  setHeaderColumn(eodRes) {
    if (eodRes) {
      var result = [
        { header: 'Europe', dataKey: 'name' },
        { header: 'Date', dataKey: 'date' },
        { header: 'Status', dataKey: 'status' }
      ];
      return result;
    }
  }
}

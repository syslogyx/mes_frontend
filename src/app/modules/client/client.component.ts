import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { UtilityService } from '../../common/utility.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable, MatDialog } from '@angular/material';
import { ClientViewComponent } from './client-view/client-view.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: any;
  displayedColumns = ['sr_no', 'name', 'email', 'mobile','status', 'action'];
  dataSource: any;
  @ViewChild('table') table: MatTable<any>;

  constructor(
    private clientService: ClientService,
    private utility: UtilityService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getClientList();
  }

  /**
   * get client list according to pagination
   */
  getClientList() {
    //create pagination object.
    let pagination: any = {
      page: 1,
      limit: 10
    };
    this.clientService.getClientList(pagination).subscribe(
      data => {
        let dt: any = data;
        if (data) {
          this.clients = dt.data.data;
          this.dataSource = this.clients;
          console.log(this.dataSource);
          
          setTimeout(() => {
            moveItemInArray(this.dataSource, 0, 0);
          }, 10);
        }
      }, error => {
        this.utility.openSnackBar(error.error.message, '');
      });
  }

  /**
   * Material Drag and Drop event handling method
   * @param event 
   */
  dropTable(event: CdkDragDrop<any>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
    console.log("After Ordering : ", this.clients);
  }

  /**
   * Opens dialog on 'OnClick' event of a button
   */
  openDialog(element): void {
    console.log(element);
    const dialogRef = this.dialog.open(ClientViewComponent, {
      width: '650px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

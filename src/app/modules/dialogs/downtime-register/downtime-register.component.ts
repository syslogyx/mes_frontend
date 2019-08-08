import { Component, OnInit, Inject, ElementRef, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LocalDataSource } from "ng2-smart-table";
import * as tableData from "./downtime-register-data";

@Component({
  selector: "app-downtime-register",
  templateUrl: "./downtime-register.component.html",
  styleUrls: ["./downtime-register.component.css"],
})
export class DowntimeRegisterComponent implements OnInit {
  source: LocalDataSource;
  // @ViewChild('ng2-smart-filters') divClick: ElementRef;
  constructor(
    public dialogRef: MatDialogRef<DowntimeRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.source = new LocalDataSource(tableData.data);
    setTimeout(() => {
      this.source.setPaging(1, 5, true);
    }, 0);
  }
  settings = tableData.settings;

  ngOnInit() {
    
  }

  /**
   * For Closing opened dialog
   */
  close(): void {
    this.dialogRef.close();
  }

  onCreateConfirm(event) {
    console.log("Create Event In Console");
    console.log(event);
    event.confirm.resolve(event.newData);
    console.log(this.source);    
  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console");
    console.log(event);
    console.log(this.source);
  }
}

import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-scrap-monitoring",
  templateUrl: "./scrap-monitoring.component.html",
  styleUrls: ["./scrap-monitoring.component.css"],
})
export class ScrapMonitoringComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ScrapMonitoringComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  /**
   * For Closing opened dialog
   */
  close(): void {
    this.dialogRef.close();
  }
}

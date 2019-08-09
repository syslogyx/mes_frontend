import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-process-parameters",
  templateUrl: "./process-parameters.component.html",
  styleUrls: ["./process-parameters.component.css"],
})
export class ProcessParametersComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProcessParametersComponent>,
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

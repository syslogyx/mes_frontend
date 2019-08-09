import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-process-equipment",
  templateUrl: "./process-equipment.component.html",
  styleUrls: ["./process-equipment.component.css"],
})
export class ProcessEquipmentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProcessEquipmentComponent>,
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

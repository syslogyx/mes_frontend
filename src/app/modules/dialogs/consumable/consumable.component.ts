import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-consumable",
  templateUrl: "./consumable.component.html",
  styleUrls: ["./consumable.component.css"],
})
export class ConsumableComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConsumableComponent>,
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

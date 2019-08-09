import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-ecs",
  templateUrl: "./ecs.component.html",
  styleUrls: ["./ecs.component.css"],
})
export class EcsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EcsComponent>,
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

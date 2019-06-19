import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
  id: number;

  constructor(
    public dialogRef: MatDialogRef<ClientViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
    }

  ngOnInit() {
    
  }

  /**
   * For Closing opened dialog 
   */
  close(): void {
    this.dialogRef.close();
  }

}

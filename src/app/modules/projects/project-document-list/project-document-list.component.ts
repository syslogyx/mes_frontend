import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { UtilityService } from '../../../common/utility.service';
import { ImagePreviewService } from '../../../services/image.preview.service';

@Component({
  selector: 'app-project-document-list',
  templateUrl: './project-document-list.component.html',
  styleUrls: ['./project-document-list.component.css']
})
export class ProjectDocumentListComponent implements OnInit {
  documentList: any;
  displayedColumns = ['sr_no', 'title', 'description','action'];

  constructor(
    public dialogRef: MatDialogRef<ProjectDocumentListComponent>,
    private utility: UtilityService,
    private prevImgService : ImagePreviewService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.documentList = data;
  }

  ngOnInit() {
  }

   /**
   * Show Project Document Image in Dialog
   */
  showImage(path : String) {
    this.prevImgService.showImage(path);
  }

}

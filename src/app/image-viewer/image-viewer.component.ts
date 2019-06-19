import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppConfig } from '../config/app-config';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  imageSrc: string;

  constructor(
    public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public path: any) {
    this.imageSrc = AppConfig.BASE_URL_HOST_PORT + path;
  }

  ngOnInit() {
  }

  /**
   * If the file isn't a image
   */
  nextTab() {
    var leftPosition = (screen.width) ? (screen.width - 700) / 2 : 0;
    var topPosition = (screen.height) ? (screen.height - 300) / 2 : 0;
    var settings  =
      'height=' + 300 + ',width=' + 700 + ',top=' + topPosition + ',left=' + leftPosition + ',scrollbars=' + scroll + ',resizable';
    window.open(this.imageSrc, 'example', settings);
    this.dialogRef.close();
  }



}

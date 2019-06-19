import { Injectable } from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { MatDialog } from '@angular/material';

@Injectable({
    providedIn: 'root'
})

export class ImagePreviewService {

    constructor(private dialog: MatDialog) { }

    /**
     * Show Project Document Image in Dialog
     */
    public showImage(path: String) {
        const dialogRef = this.dialog.open(ImageViewerComponent, {
            width: '700px',
            // height: '600px',
            data: path,
            panelClass: 'img-prev-dialog-container'
        });
    }
}

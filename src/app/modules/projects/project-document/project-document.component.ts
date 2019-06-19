import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ProjectService } from '../../../services/project.service';
import { UtilityService } from '../../../common/utility.service';

@Component({
  selector: 'app-project-document',
  templateUrl: './project-document.component.html',
  styleUrls: ['./project-document.component.css']
})
export class ProjectDocumentComponent implements OnInit {
  projectDocumentForm: FormGroup;

  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  file = new FormControl('', [Validators.required]);
  selectedProjData: any;
  selectedFile: any;
  submitted: boolean = false;

  constructor(
    private projectService: ProjectService,
    private utility: UtilityService,
    public dialogRef: MatDialogRef<ProjectDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedProjData = data;
  }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Setting input form group here
   */
  createForm() {
    this.projectDocumentForm = new FormGroup({
      title: this.title,
      description: this.description,
      file: this.file,
    });
  }

  /**
  * setting error message
  * @param element 
  */
  getErrorMessage(element) {
    switch (element) {
      case 'title':
        return this.title.hasError('required') ? 'Please enter title.' : '';
        break;
      case 'description':
        return this.description.hasError('required') ? 'Please enter description.' : '';
        break;
      case 'file':
        return this.file.hasError('required') ? 'Please select file.' : '';
        break;
    }
  }

  /**
   * For Closing opened dialog 
   */
  close(): void {
    this.dialogRef.close();
  }

  /**
    * On change event of File input
    */
  onChangeFileInpt(event) {
    this.selectedFile = event.target.files[0];
    this.projectDocumentForm.controls['file'].setValue(this.selectedFile);
    console.log(this.selectedFile);
  }

  onSubmit() {
    this.submitted = true;
    if (this.projectDocumentForm.invalid) {
      console.log(this.projectDocumentForm.value);
      console.log("invalid");
      return;
    }

    let procDocReqFormData = this.projectDocumentForm.value;
    procDocReqFormData["project_id"] = this.selectedProjData.id;
    procDocReqFormData["type"] = 1;
    this.createProjDoc(procDocReqFormData);

  }

  /**
   * Save the project document details to the server along with request body
   * @param req 
   */
  createProjDoc(req: any) {
    this.projectService
      .createProjectDocument(req)
      .pipe(first())
      .subscribe(data => {
        if (data.hasOwnProperty('data')) {
          console.log(data);
          this.utility.openSnackBar("Project Document Uploaded Successfully!!", '');
          this.dialogRef.close("Successful");
          setTimeout(() => {
            this.projectDocumentForm.reset();
          }, 5000);
        }
        console.log(data);
      }, error => {
        console.log(error);
        this.utility.openSnackBar(error.error.message, '');
      });
  }


}

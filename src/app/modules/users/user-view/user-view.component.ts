import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  userForm: FormGroup;
  designation = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]);
  gender = new FormControl('', [Validators.required]);
  department = new FormControl('', [Validators.required]);
  userData: any;
  disabled: boolean;

  constructor(
    public dialogRef: MatDialogRef<UserViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.userData = data;
    this.createForm();
    this.prefillFormData();
    // setTimeout(() => {
    //   this.disabled =true;
    // }, 1000);
  }


  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.userForm = new FormGroup({
      email: this.email,
      designation: this.designation,
      gender: this.gender,
      department: this.department,
    });
  }

  /**
  * setting error message
  * @param element 
  */
  getErrorMessage(element) {
    switch (element) {
      case 'designation':
        return this.designation.hasError('required') ? 'Please enter designation.' : '';
        break;
      case 'email':
        return this.email.hasError('required') ? 'Please enter email.' :
          this.email.hasError('pattern') ? 'Not a valid email' : '';
        break;
      case 'gender':
        return this.gender.hasError('required') ? 'Please enter gender.' : '';
        break;
      case 'department':
        return this.department.hasError('required') ? 'Please enter department.' : '';
        break;
    }
  }

  prefillFormData() {
    this.userForm.setValue({
      email: this.userData.email,
      designation: this.userData.designation,
      gender: this.userData.gender,
      department: this.userData.department,
    });
  }

  onSubmit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { first } from 'rxjs/operators';
import { UtilityService } from '../../../common/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  passHide = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private utility : UtilityService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
   }

  ngOnInit() {
    this.createForm();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  /**
   * Setting input form group here
   */
  createForm() {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

  /**
   * setting error message
   * @param element 
   */
  getErrorMessage(element) {
    switch (element) {
      case 'username':
        return this.username.hasError('required') ? 'Please enter username.' : '';
        break;
      case 'password':
        return this.password.hasError('required') ? 'Please enter password.' : '';
        break;
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
  * On submit form check validation and hit login API
  */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log("Invalid");
      return;
    }

    this.loading = true;
    this.authenticationService.requestLogin(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          this.utility.openSnackBar(error.error.message,'');
          this.loading = false;
        });
  }

}

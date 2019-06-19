import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../../common/utility.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  createClientForm: FormGroup;
  isUpdate: boolean = false;
  id: number;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private utility: UtilityService,
  ) {
    this.getClientById();
  }

  ngOnInit() {
    this.createForm();
  }

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]);
  mobile = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]);
  address = new FormControl('', [Validators.required]);
  business = new FormControl('', [Validators.required]);


  /**
   * Setting input form group here
   */
  createForm() {
    this.createClientForm = new FormGroup({
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
      business: this.business,
    });
  }

  /**
   * setting error message
   * @param element 
   */
  getErrorMessage(element) {
    switch (element) {
      case 'name':
        return this.name.hasError('required') ? 'Please enter name.' : '';
        break;
      case 'email':
        return this.email.hasError('required') ? 'Please enter email.' :
          this.email.hasError('pattern') ? 'Not a valid email' : '';
        break;
      case 'mobile':
        return this.mobile.hasError('required') ? 'Please enter mobile no.' :
          this.mobile.hasError('minlength') || this.mobile.hasError('maxlength') ? 'Number must be of 10 digits at least.' :
            this.mobile.hasError('pattern') ? 'Please enter only numeric value.' : '';
        break;
      case 'address':
        return this.address.hasError('required') ? 'Please enter address.' : '';
        break;
      case 'business':
        return this.business.hasError('required') ? 'Please enter business.' : '';
        break;
    }
  }

  getClientById() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isUpdate = true;
        this.id = +params['id'];
        this.clientService.getClientById(this.id)
          .pipe(first())
          .subscribe(data => {
            let dt: any = data;
            if (dt) {
              this.clientEdit(dt.data);
            }
          }, error => { });
      }
    });
  }

  onSubmit() {
    if (this.createClientForm.invalid) {
      console.log(this.createClientForm.value);
      console.log("invalid");
      return;
    }

    let clientReqFormData = this.createClientForm.value;
    clientReqFormData["created_by"] = 1;
    clientReqFormData["updated_by"] = 1;
    if (this.isUpdate) {
      this.updateClient(this.id, clientReqFormData);
    } else {
      this.createClient(clientReqFormData);
    }

  }


  /**
   * create the user
   * @param userReqFormData 
   */
  createClient(clientReqFormData) {
    this.clientService
      .createClient(clientReqFormData)
      .pipe(first())
      .subscribe(data => {
        if (data) {
          this.utility.openSnackBar("Client created Successfully!!", '');
          setTimeout(() => {
            this.createClientForm.reset();
            this.router.navigate(['client']);
          }, 2000);
        }
        console.log(data);
      }, error => {
        this.utility.openSnackBar(error.error.message, '');
      });
  }

  /**
   * create the user
   * @param userReqFormData 
   */
  updateClient(id, clientReqFormData) {
    this.clientService
      .updateClient(id, clientReqFormData)
      .pipe(first())
      .subscribe(data => {
        if (data) {
          this.utility.openSnackBar("Client updated Successfully!!", '');
          setTimeout(() => {
            this.createClientForm.reset();
            this.router.navigate(['client']);
          }, 2000);
        }
        console.log(data);
      }, error => {
        this.utility.openSnackBar(error.error.message, '');
      });
  }

  clientEdit(clientData) {
    console.log("clientData", clientData);
    this.createClientForm.setValue({
      name: clientData.name,
      email: clientData.email,
      mobile: clientData.mobile,
      address: clientData.address,
      business: clientData.business
    });

  }

}

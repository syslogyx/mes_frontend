import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

import { CustomValidators } from "ng2-validation";
import { Router } from "@angular/router";
import { UtilityService } from "../../../../../common/utility.service";
import { MasterSettingsService } from "../../../../../services/master-settings.service";
import { first } from "rxjs/operators";
@Component({
  selector: "app-add-code-group",
  templateUrl: "./add-code-group.component.html",
  styleUrls: ["./add-code-group.component.css"],
})
export class AddCodeGroupComponent implements OnInit {
  public form: FormGroup;
  id: number;
  isUpdate: boolean = false;
  submit:boolean = false;
  editData: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private utility: UtilityService,
    private masterService: MasterSettingsService,
    private route:Router
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      group_code: [null, Validators.compose([Validators.required])],
      group_desc: [null, Validators.compose([Validators.required])],
      incrementor: [
        null,
        Validators.compose([
          Validators.required,
          CustomValidators.number,
          Validators.min(0),
        ]),
      ],
    });
  }

  /**
   * On submit of Code group data
   */
  onSubmit() {
    if (this.form.invalid) {
      console.log(this.form.value);
      console.log("invalid");
      return;
    }

    this.submit =true;
    let reqFormData = this.form.value;
    reqFormData["updated_by_id"] = 1;
    
    let masterType = "code_group";

    if (this.isUpdate) {
      // this.updateClient(this.id, reqFormData);
    } else {
      this.createMaster(reqFormData, masterType);
    }
  }

  /**
   * create the user
   * @param userReqFormData
   */
  createMaster(formData: object, masterType: string) {
    this.masterService
      .createMaster(formData, masterType)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.utility.openSnackBar("Added Successfully!!", "");
            setTimeout(() => {
              this.form.reset();
              this.router.navigate(["/master/code_group"]);
            }, 2000);
          }
          console.log(data);
        },
        error => {
          this.utility.openSnackBar(error.error.message, "");
        }
      );
  }

  updateMaster(masterData: object) {
    console.log(masterData);
    throw new Error("Method not implemented.");
  }
}

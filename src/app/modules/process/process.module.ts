import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProcessRouting } from "./process.routing";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ShiftProductionLogBookComponent } from "./shift-production-log-book/shift-production-log-book.component";
import { CoilsToProcessComponent } from "./coils-to-process/coils-to-process.component";
import { ProductionStatusComponent } from "./production-status/production-status.component";
import { MatInputModule, MatTreeModule, MatDatepickerModule } from "@angular/material";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DemoMaterialModule } from "../../demo-material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  declarations: [
    DashboardComponent,
    ShiftProductionLogBookComponent,
    CoilsToProcessComponent,
    ProductionStatusComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProcessRouting),
    MatInputModule,
    NgxDatatableModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatTreeModule,
    MatDatepickerModule,
  ],
})
export class ProcessModule {}

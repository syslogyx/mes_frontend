import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlanningRouting } from "./planning-routing.module";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductionPlanComponent } from "./production-plan/production-plan.component";
import {
  MatInputModule,
  MatTreeModule,
  MatDatepickerModule,
} from "@angular/material";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DemoMaterialModule } from "../../demo-material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";
import { TooltipModule } from "ng2-tooltip-directive";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ChartistModule } from "ng-chartist";

@NgModule({
  declarations: [DashboardComponent, ProductionPlanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PlanningRouting),
    MatInputModule,
    NgxDatatableModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatTreeModule,
    MatDatepickerModule,
    TooltipModule,
    Ng2SmartTableModule,
    ChartistModule,
  ],
})
export class PlanningModule {}

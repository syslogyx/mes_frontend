import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProcessRouting } from "./process.routing";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ShiftProductionLogBookComponent } from "./shift-production-log-book/shift-production-log-book.component";
import { CoilsToProcessComponent } from "./coils-to-process/coils-to-process.component";
import { ProductionStatusComponent } from "./production-status/production-status.component";
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
import { DowntimeRegisterComponent } from "../dialogs/downtime-register/downtime-register.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ConsumableComponent } from "../dialogs/consumable/consumable.component";
import { ProcessParametersComponent } from "../dialogs/process-parameters/process-parameters.component";
import { ProcessEquipmentComponent } from "../dialogs/process-equipment/process-equipment.component";
import { ScrapMonitoringComponent } from "../dialogs/scrap-monitoring/scrap-monitoring.component";
import { EcsComponent } from "../dialogs/ecs/ecs.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ShiftProductionLogBookComponent,
    CoilsToProcessComponent,
    ProductionStatusComponent,
    DowntimeRegisterComponent,
    ConsumableComponent,
    ProcessParametersComponent,
    ProcessEquipmentComponent,
    ScrapMonitoringComponent,
    EcsComponent,
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
    TooltipModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [
    DowntimeRegisterComponent,
    ConsumableComponent,
    ProcessParametersComponent,
    ProcessEquipmentComponent,
    ScrapMonitoringComponent,
    EcsComponent
  ],
})
export class ProcessModule {}

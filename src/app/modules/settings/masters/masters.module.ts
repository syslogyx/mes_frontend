import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutes } from './masters.routing';
import { RouterModule } from '@angular/router';
import { CodeGroupComponent } from './code-group/code-group.component';
import { CampaignComponent } from './campaign/campaign.component';
import { DprTargetComponent } from './dpr-target/dpr-target.component';
import { ElongationComponent } from './elongation/elongation.component';
import { LeadTimeComponent } from './lead-time/lead-time.component';
import { ProcessFamilyComponent } from './process-family/process-family.component';
import { ProcessUnitComponent } from './process-unit/process-unit.component';
import { ProductDefinitionComponent } from './product-definition/product-definition.component';
import { ShelfLifeComponent } from './shelf-life/shelf-life.component';
import { ShrinkAgeComponent } from './shrink-age/shrink-age.component';
import { TrimmingComponent } from './trimming/trimming.component';
import { ThicknessComponent } from './thickness/thickness.component';
import { UnitInchargeComponent } from './unit-incharge/unit-incharge.component';
import { MatInputModule, MatTreeModule, MatDatepickerModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DemoMaterialModule } from '../../../demo-material-module';
import { AddCodeGroupComponent } from './add_page/add-code-group/add-code-group.component';
import { AddCampaignComponent } from './add_page/add-campaign/add-campaign.component';
import { AddDprTargetComponent } from './add_page/add-dpr-target/add-dpr-target.component';
import { AddElongationComponent } from './add_page/add-elongation/add-elongation.component';
import { AddLeadTimeComponent } from './add_page/add-lead-time/add-lead-time.component';
import { AddProcessFamilyComponent } from './add_page/add-process-family/add-process-family.component';
import { AddProcessUnitComponent } from './add_page/add-process-unit/add-process-unit.component';
import { AddProductDefinitionComponent } from './add_page/add-product-definition/add-product-definition.component';
import { AddShelfLifeComponent } from './add_page/add-shelf-life/add-shelf-life.component';
import { AddShrinkAgeComponent } from './add_page/add-shrink-age/add-shrink-age.component';
import { AddThicknessComponent } from './add_page/add-thickness/add-thickness.component';
import { AddTrimmingComponent } from './add_page/add-trimming/add-trimming.component';
import { AddUnitInchargeComponent } from './add_page/add-unit-incharge/add-unit-incharge.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';
import { ProcessTypeComponent } from './process-type/process-type.component';

@NgModule({
  declarations: [
    CodeGroupComponent,
    CampaignComponent,
    DprTargetComponent,
    ElongationComponent,
    LeadTimeComponent,
    ProcessFamilyComponent,
    ProcessUnitComponent,
    ProductDefinitionComponent,
    ShelfLifeComponent,
    ShrinkAgeComponent,
    TrimmingComponent,
    ThicknessComponent,
    UnitInchargeComponent,
    AddCodeGroupComponent,
    AddCampaignComponent,
    AddDprTargetComponent,
    AddElongationComponent,
    AddLeadTimeComponent,
    AddProcessFamilyComponent,
    AddProcessUnitComponent,
    AddProductDefinitionComponent,
    AddShelfLifeComponent,
    AddShrinkAgeComponent,
    AddThicknessComponent,
    AddTrimmingComponent,
    AddUnitInchargeComponent,
    ProcessTypeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MasterRoutes),
    MatInputModule,
    NgxDatatableModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatTreeModule,
    MatDatepickerModule
  ]
})
export class MastersModule { }

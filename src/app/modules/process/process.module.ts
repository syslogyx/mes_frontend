import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRouting } from './process.routing';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShiftProductionLogBookComponent } from './shift-production-log-book/shift-production-log-book.component';
import { CoilsToProcessComponent } from './coils-to-process/coils-to-process.component';
import { ProductionStatusComponent } from './production-status/production-status.component';


@NgModule({
  declarations: [DashboardComponent, ShiftProductionLogBookComponent, CoilsToProcessComponent, ProductionStatusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProcessRouting)
  ]
})
export class ProcessModule { }

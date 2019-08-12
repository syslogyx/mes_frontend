import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoilsToProcessComponent } from './coils-to-process/coils-to-process.component';
import { ProductionStatusComponent } from './production-status/production-status.component';
import { ShiftProductionLogBookComponent } from './shift-production-log-book/shift-production-log-book.component';
import { ProcessedCoilsComponent } from './processed-coils/processed-coils.component';


export const ProcessRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'coils_to_process',
        component: CoilsToProcessComponent
      },
      {
        path: 'production_status',
        component: ProductionStatusComponent
      },
      {
        path: 'shift_production_log_book',
        component: ShiftProductionLogBookComponent
      },
      {
        path: 'processed_coils',
        component: ProcessedCoilsComponent
      }
    ]
  }
];

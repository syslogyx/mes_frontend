import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductionPlanComponent } from './production-plan/production-plan.component';

export const PlanningRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'production_plan',
        component: ProductionPlanComponent
      },
    ]
  }
];

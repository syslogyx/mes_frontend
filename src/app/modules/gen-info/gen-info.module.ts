import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenInfoRouteList } from './gen-info-routing.module';
import { DomainTechComponent } from './domain-tech/domain-tech.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = GenInfoRouteList
@NgModule({
  declarations: [
    DomainTechComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GenInfoModule { }

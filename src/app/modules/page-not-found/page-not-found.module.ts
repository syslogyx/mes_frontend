import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pgRoutList } from './page-not-found-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = pgRoutList; 

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageNotFoundModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteList } from './home-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes : Routes = RouteList;

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }

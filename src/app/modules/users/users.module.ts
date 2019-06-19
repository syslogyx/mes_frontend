import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreateComponent } from './user-create/user-create.component';
import { Routes, RouterModule } from '@angular/router';
import { RouteList } from './users-routing.module';
import { UserEodListComponent } from './user-eod-list/user-eod-list.component';
import { MatTableModule, MatInputModule, MatButtonModule, MatPaginatorModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = RouteList;

@NgModule({
  declarations: [
    UserCreateComponent,
    UserEodListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class UsersModule { }

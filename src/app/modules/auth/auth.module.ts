import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteList } from './auth-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButton, MatButtonModule, MatIconModule } from '@angular/material';

const routes : Routes = RouteList;
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,    
    MatButtonModule,
    MatIconModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }

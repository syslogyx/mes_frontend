import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { clientRouteList } from './client-routing.module';
import { MatTableModule, MatIconModule, MatButtonModule, MatInputModule, MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { ClientCreateComponent } from './client-create/client-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientViewComponent } from './client-view/client-view.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

const routes : Routes = clientRouteList;

@NgModule({
  declarations: [
    ClientComponent,
    ClientCreateComponent,
    ClientViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    DragDropModule,
    MatDialogModule,
    MatSlideToggleModule

  ]
})
export class ClientModule { }

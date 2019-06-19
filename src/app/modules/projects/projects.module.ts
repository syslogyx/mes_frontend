import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projectRoutelist } from './projects-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { ProjectDocumentListComponent } from './project-document-list/project-document-list.component';

const routes : Routes = projectRoutelist;

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectTaskComponent,
    ProjectDocumentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports : [],
  entryComponents : [ProjectDocumentListComponent]
})
export class ProjectsModule { }

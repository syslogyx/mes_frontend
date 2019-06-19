import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatIconModule, MatSnackBarModule, MatDialogModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavHeaderComponent } from './layouts/nav-header/nav-header.component';
import { NavLeftComponent } from './layouts/nav-left/nav-left.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'angular-crumbs';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { UserViewComponent } from './modules/users/user-view/user-view.component';
import { SidebarModule } from 'ng-sidebar';
import { ProjectDocumentComponent } from './modules/projects/project-document/project-document.component';
import { ProjectListViewComponent } from './modules/projects/project-list-view/project-list-view.component';                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
import { ExcelService } from './services/excel.service';
import { PdfService } from './services/pdf.service';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainLayoutComponent,
    NavHeaderComponent,
    NavLeftComponent,
    DefaultLayoutComponent,
    BreadcrumbComponent,
    UserViewComponent,
    ProjectDocumentComponent,
    ProjectListViewComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    NgbDropdownModule,
    AngularFontAwesomeModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BreadcrumbModule,
    MatDialogModule,
    SidebarModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
  ],
  entryComponents: [UserViewComponent,ProjectDocumentComponent,ProjectListViewComponent,ImageViewerComponent],
  providers: [ExcelService,PdfService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

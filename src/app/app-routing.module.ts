import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    component: DefaultLayoutComponent,
    loadChildren: './modules/auth/auth.module#AuthModule',
    data: {
      breadcrumb: 'auth'
    }
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: './modules/home/home.module#HomeModule',
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'users',
    component: MainLayoutComponent,
    loadChildren: './modules/users/users.module#UsersModule',
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Users'
    }
  },
  {
    path: 'eod',
    component: MainLayoutComponent,
    loadChildren: './modules/users/users.module#UsersModule',
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'EOD'
    }
  },
  {
    path: 'client',
    component: MainLayoutComponent,
    loadChildren: './modules/client/client.module#ClientModule',
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Client'
    }
  },
  {
    path: 'project/info',
    component: MainLayoutComponent,
    loadChildren: './modules/gen-info/gen-info.module#GenInfoModule',
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Project/Info'
    }
  },
  {
    path: 'page-not-found',
    component: MainLayoutComponent,
    loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule',
    data: {
      breadcrumb: 'Page Not Found'
    }
  },
  {
    path: 'project',
    component: MainLayoutComponent,
    loadChildren: './modules/projects/projects.module#ProjectsModule',
    data: {
      breadcrumb: 'Project'
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

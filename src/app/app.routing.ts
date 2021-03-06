import { Routes } from "@angular/router";
import { FullComponent } from "./layouts/full/full.component";
import { AppBlankComponent } from "./layouts/blank/blank.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboards",
        loadChildren: "./dashboards/dashboards.module#DashboardsModule",
      },
      {
        path: "material",
        loadChildren:
          "./material-component/material.module#MaterialComponentsModule",
      },
      {
        path: "apps",
        loadChildren: "./apps/apps.module#AppsModule",
      },
      {
        path: "forms",
        loadChildren: "./forms/forms.module#FormModule",
      },
      {
        path: "tables",
        loadChildren: "./tables/tables.module#TablesModule",
      },
      {
        path: "datatables",
        loadChildren: "./datatables/datatables.module#DataTablesModule",
      },
      {
        path: "pages",
        loadChildren: "./pages/pages.module#PagesModule",
      },
      {
        path: "widgets",
        loadChildren: "./widgets/widgets.module#WidgetsModule",
      },
      {
        path: "charts",
        loadChildren: "./charts/chartslib.module#ChartslibModule",
      },
      {
        path: "multi",
        loadChildren: "./multi-dropdown/multi-dd.module#MultiModule",
      },
      {
        path: "master",
        loadChildren: "./modules/settings/masters/masters.module#MastersModule",
      },
      {
        path: "",
        loadChildren: "./modules/process/process.module#ProcessModule",
      },
      {
        path: "planning",
        loadChildren: "./modules/planning/planning.module#PlanningModule",
      },
    ],
  },
  {
    path: "",
    component: AppBlankComponent,
    children: [
      {
        path: "authentication",
        loadChildren:
          "./authentication/authentication.module#AuthenticationModule",
      },
    ],
  },
  {
    path: "**",
    redirectTo: "authentication/404",
  },
];

import { UserCreateComponent } from './user-create/user-create.component';
import { UserEodListComponent } from './user-eod-list/user-eod-list.component';

export let RouteList = [
  {
    path: 'create',
    component: UserCreateComponent,
    data: {
      breadcrumb: 'Create'
    }
  },
  {
    path: 'eod_list',
    component: UserEodListComponent,
    data: {
      breadcrumb: 'Eod-List'
    }
  }
];

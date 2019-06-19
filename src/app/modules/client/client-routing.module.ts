import { ClientComponent } from './client.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientViewComponent } from './client-view/client-view.component';

export let clientRouteList = [
  {
    path: '',
    component: ClientComponent,
    data: {
      breadcrumb: 'List'
    }
  },
  {
    path: 'create',
    component: ClientCreateComponent,
    data: {
      breadcrumb: 'Create'
    }
  },
  {
    path: 'update/:id',
    component: ClientCreateComponent,
    data: {
      breadcrumb: 'Update'
    }
  },
  {
    path: 'view/:id',
    component: ClientViewComponent,
    data: {
      breadcrumb: 'View'
    }
  }


];


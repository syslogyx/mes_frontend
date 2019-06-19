import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectTaskComponent } from './project-task/project-task.component';

export let projectRoutelist = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'task',
    component: ProjectTaskComponent,
    data : {
      breadcrumb : "Task"
    }
  },
];


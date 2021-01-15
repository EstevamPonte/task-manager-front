import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { TasksComponent } from './tasks/tasks.component'
import { TaskDetailComponent } from './tasks/task-datail/task-detail.component'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { SignInFormComponent } from './sign-in-form/sign-in-form-component'

const ROUTES = RouterModule.forRoot([
  {
    path: 'tasks/:id',
    component: TaskDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpFormComponent
  },
  {
    path: 'sign-in',
    component: SignInFormComponent
  },
])

@NgModule({
  imports: [ROUTES],
  exports: [RouterModule],
})

export class AppRoutingModule{

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Angular plugins import
import { Angular2TokenService } from "angular2-token"
import { AuthService }  from './shared/auth.service'
import { TaskService } from './tasks/shared/task.service'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavBarComponent } from './navbar/navbar.component'
import { TasksComponent } from './tasks/tasks.component'
import { TaskDetailComponent } from './tasks/task-datail/task-detail.component'
import { TaskSearchComponent } from './navbar/task-search/task-search.component'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { SignInFormComponent } from './sign-in-form/sign-in-form-component'

import { AppRoutingModule } from './app-routing.module'


// rxjs operator
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/debounceTime'

//rxjs extension

import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'

//jquery
import * as $ from 'jquery'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskSearchComponent,
    SignUpFormComponent,
    SignInFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    TaskService,
    Angular2TokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

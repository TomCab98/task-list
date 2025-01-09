import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BotonComponent } from './components/boton/boton.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        BotonComponent,
        TasksComponent,
        TaskItemComponent,
        AddTaskComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FontAwesomeModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

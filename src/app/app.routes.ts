import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/components/about.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.routes').then((m) => m.routes),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/register/register.routes').then((m) => m.routes),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks.routes').then((m) => m.routes),
    canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
];

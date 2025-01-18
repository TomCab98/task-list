import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/components/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks.routes').then((m) => m.routes),
  },
  { path: 'about', component: AboutComponent },
];

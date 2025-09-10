import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { MainLayout } from './pages/main-layout/main-layout';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(c => c.Dashboard)
      },
      {
        path: 'registrations',
        loadComponent: () => import('./pages/registrations/registrations').then(c => c.Registrations)
      },
    ]
  },
  { path: '**', redirectTo: 'login' }
];

import {Routes} from '@angular/router';
import {SuperLayoutComponent} from './shared/layouts/super-layout/super-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: SuperLayoutComponent,
    data: {pageTitle: 'System Monitor'},
    children: [
      {
        path: '',
        redirectTo: '/monitor/home',
        pathMatch: 'full'
      },
      {
        path: 'monitor',
        loadChildren: './system-health-monitor/system-health-monitor.module#SystemHealthMonitorModule'
      }
    ]
  }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginPageComponent } from './pages/admin-login-page/admin-login-page.component';
import { AdminWorkPageLayoutComponent } from './layouts/admin-work-page-layout/admin-work-page-layout.component';
import { AdminHelpOffersPageComponent } from './pages/admin-help-offers-page/admin-help-offers-page.component';
import { AdminHelpRequestsPageComponent } from './pages/admin-help-requests-page/admin-help-requests-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { AdminSettingsPageComponent } from './pages/admin-settings-page/admin-settings-page.component';

const adminRoutes: Routes = [
  {
    path: 'login',
    component: AdminLoginPageComponent,
  },
  {
    path: '',
    component: AdminWorkPageLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'help-offers',
      },
      {
        path: 'help-offers',
        component: AdminHelpOffersPageComponent,
      },
      {
        path: 'help-requests',
        component: AdminHelpRequestsPageComponent,
      },
      {
        path: 'users',
        component: AdminUsersPageComponent,
      },
      {
        path: 'settings',
        component: AdminSettingsPageComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

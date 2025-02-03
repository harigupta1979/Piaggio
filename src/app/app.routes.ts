import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './layout/otp-verification/otp-verification.component';
import { SetPasswordComponent } from './layout/set-password/set-password.component';
import { DashboardComponent } from './pages/side-nav/dashboard/dashboard.component';
import { SideNavComponent } from './pages/side-nav/side-nav.component';
import { UserRoleTabsComponent } from './pages/side-nav/dashboard/Users_RoleMaster/user-role-tabs/user-role-tabs.component';
import { UserMasterComponent } from './pages/side-nav/dashboard/Users_RoleMaster/user-master/user-master.component';
import { RoleMasterComponent } from './pages/side-nav/dashboard/Users_RoleMaster/role-master/role-master.component';
import { PermissionsMasterComponent } from './pages/side-nav/dashboard/Users_RoleMaster/permissions-master/permissions-master.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'otp-verification', component: OtpVerificationComponent },
      { path: 'set-password', component: SetPasswordComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: SideNavComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'user-roles-permissions',
        component: UserRoleTabsComponent,
        children: [
          { path: 'user', component: UserMasterComponent },
          { path: 'role', component: RoleMasterComponent },
          { path: 'permission', component: PermissionsMasterComponent },
          { path: '', redirectTo: 'user', pathMatch: 'full' }, // Default tab
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

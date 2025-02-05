import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/authlayout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { SetPasswordComponent } from './auth/set-password/set-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { UserRoleTabsComponent } from './components/user-role-master/user-role-tabs/user-role-tabs.component';
import { UserMasterComponent } from './components/user-role-master/user-master/user-master.component';
import { RoleMasterComponent } from './components/user-role-master/role-master/role-master.component';
import { PermissionsMasterComponent } from './components/user-role-master/permissions-master/permissions-master.component';
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
    component: MainLayoutComponent,
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

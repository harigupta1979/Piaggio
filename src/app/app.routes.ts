import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './layout/otp-verification/otp-verification.component';
import { SetPasswordComponent } from './layout/set-password/set-password.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/pages/dashboard/dashboard.component';

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
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: '**', redirectTo: 'login' },
];

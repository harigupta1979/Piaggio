import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './layout/otp-verification/otp-verification.component';
import { SetPasswordComponent } from './layout/set-password/set-password.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/side-nav/dashboard/dashboard.component';
import { SideNavComponent } from './pages/side-nav/side-nav.component';

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
    component: SideNavComponent, // Uses Layout (Navbar + Sidebar)
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Dashboard inside Layout
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default to Dashboard
    ],
  },

  { path: '**', redirectTo: 'login' },
];

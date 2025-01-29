import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './layout/otp-verification/otp-verification.component';
import { SetPasswordComponent } from './layout/set-password/set-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'otp-verification', component: OtpVerificationComponent },
      { path: 'set-password', component: SetPasswordComponent },
      { path: '', redirectTo: 'forgot-password', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

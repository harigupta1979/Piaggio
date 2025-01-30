import { Component, isStandalone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './layout/login/login.component';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Piaggio-front';
}

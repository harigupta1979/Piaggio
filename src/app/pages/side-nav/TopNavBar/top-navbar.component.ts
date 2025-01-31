import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  constructor(private router: Router) {}
  viewProfile() {
    this.router.navigate(['/profile']);
  }

  changePassword() {
    this.router.navigate(['/change-password']);
  }

  logout() {
    localStorage.removeItem('userRole'); // Clear user session
    this.router.navigate(['/login']);
  }
}

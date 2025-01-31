import { Component } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-daynamic-side-nav',
  imports: [MaterialModule, RouterModule],
  templateUrl: './daynamic-side-nav.component.html',
  styleUrl: './daynamic-side-nav.component.css',
})
export class DaynamicSideNavComponent {
  isCollapsed = false; // Default is expanded
  activeItem: string = '';

  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed; // Toggle collapse state
  }

  setActive(item: string) {
    this.activeItem = item; // Set active state
  }
}

import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-role-tabs',
  imports: [MaterialModule, RouterModule],
  templateUrl: './user-role-tabs.component.html',
  styleUrl: './user-role-tabs.component.css',
})
export class UserRoleTabsComponent {
  selectedTabIndex: number = 0; // Default to "User" tab (index 0)

  onTabChange(event: number) {
    // Capture the selected tab index
    this.selectedTabIndex = event;
  }
}

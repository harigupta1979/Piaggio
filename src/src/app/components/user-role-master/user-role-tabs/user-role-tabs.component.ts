import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddRoleFormComponent } from '../add-role-form/add-role-form.component';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';

@Component({
  selector: 'app-user-role-tabs',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './user-role-tabs.component.html',
  styleUrl: './user-role-tabs.component.css',
})
export class UserRoleTabsComponent {
  selectedTabIndex = 0;
  isSaveVisible = false;
  selectedPermission: any = null;
  selectedRole: any = null;
  selectedModule: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveTab();
      }
    });
    this.setActiveTab(); // For initial load
  }

  setActiveTab() {
    const currentRoute = this.route.firstChild?.snapshot.url[0]?.path;
    switch (currentRoute) {
      case 'user':
        this.selectedTabIndex = 0;
        break;
      case 'role':
        this.selectedTabIndex = 1;
        break;
      case 'permission':
        this.selectedTabIndex = 2;
        break;
      default:
        this.selectedTabIndex = 0;
    }
  }

  onTabChange(index: number) {
    const routes = ['user', 'role', 'permission'];
    this.router.navigate([routes[index]], { relativeTo: this.route });
    this.selectedTabIndex = index;
    this.isSaveVisible = false;
  }
  onPermissionSelect(permission: any) {
    this.selectedPermission = permission;
    this.isSaveVisible = true; // Show Save button when an option is selected
  }

  savePermissions() {
    this.isSaveVisible = false;
  }
  openAddUserDialog(): void {
    this.dialog
      .open(AddUserFormComponent, {
        width: '500px',
        disableClose: true,
        data: {
          /* Data passed to the dialog */
        },
        position: {
          right: '0px',
          top: '50px',
        },
      })
      .afterClosed()
      .subscribe((result: { success: boolean }) => {
        if (result && result.success) {
          console.log('User added successfully:', result);
        }
      });
  }

  openAddRoleDialog(): void {
    this.dialog
      .open(AddRoleFormComponent, {
        width: '500px',
        disableClose: true,
        data: {},
        position: {
          right: '0px',
          top: '50px',
        },
      })
      .afterClosed()
      .subscribe((result: { success: boolean }) => {
        if (result && result.success) {
          console.log('Role added successfully:', result);
        }
      });
  }
}

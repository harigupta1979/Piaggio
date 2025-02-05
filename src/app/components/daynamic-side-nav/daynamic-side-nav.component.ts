import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-daynamic-side-nav',
  imports: [MaterialModule, RouterModule],
  templateUrl: './daynamic-side-nav.component.html',
  styleUrl: './daynamic-side-nav.component.css',
})
export class DaynamicSideNavComponent {
  isCollapsed = false;
  activeItem: string = '';
  constructor(private router: Router) {}
  MENU_ITEMS: any[] = [];
  // MENU_ITEMS = [
  //   {
  //     title: 'Dashboard',
  //     icon: 'dashboard',
  //     route: '/dashboard',
  //     type: 'item',
  //   },
  //   {
  //     title: 'Admin',
  //     icon: 'account_circle',
  //     type: 'group',
  //     children: [
  //       {
  //         title: 'User & Role',
  //         icon: 'person_add',
  //         route: '/user-roles-permissions',
  //         type: 'item',
  //       },
  //       {
  //         title: 'Campaign',
  //         icon: 'campaign',
  //         route: '/campaign',
  //         type: 'item',
  //       },
  //       {
  //         title: 'Dealer Onboarding',
  //         icon: 'assignment_ind',
  //         route: '/dealer-onboarding',
  //         type: 'item',
  //       },
  //       {
  //         title: 'Marketing Firm',
  //         icon: 'local_mall',
  //         route: '/marketing-firm',
  //         type: 'item',
  //       },
  //       {
  //         title: 'Invoice Access',
  //         icon: 'unknown_document',
  //         route: '/invoice-access',
  //         type: 'item',
  //       },
  //       {
  //         title: 'Campaign Update',
  //         icon: 'update',
  //         route: '/campaign-update',
  //         type: 'item',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Accounts',
  //     icon: 'account_balance',
  //     type: 'group',
  //     children: [
  //       {
  //         title: 'Account 1',
  //         icon: 'account_box',
  //         route: '/account1',
  //         type: 'item',
  //       },
  //       {
  //         title: 'Account 2',
  //         icon: 'account_box',
  //         route: '/account2',
  //         type: 'item',
  //       },
  //     ],
  //   },
  // ];
 

  ngOnInit() {
    const storedMenu = localStorage.getItem('Dynemicmenu');
    this.MENU_ITEMS = storedMenu ? JSON.parse(storedMenu) : [];
  }
  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed;
  }

  setActive(item: string) {
    this.activeItem = item;
  }
  navigateToUserRole() {
    this.router.navigate(['user-roles-permissions']);
  }
}

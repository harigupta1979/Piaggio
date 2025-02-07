import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoleTabsComponent } from './user-role-master/user-role-tabs/user-role-tabs.component';

export const baseRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'user-roles-permissions',
    component: UserRoleTabsComponent,
    loadChildren: () =>
      import('./user-role-master/user-role-master.module').then(
        (m) => m.UserRoleModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(baseRoutes)], // ✅ Use forChild here
  exports: [RouterModule], // ✅ Ensure the RouterModule is exported
})
export class ComponentModule {}

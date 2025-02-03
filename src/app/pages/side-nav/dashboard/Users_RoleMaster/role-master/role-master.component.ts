import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-role-master',
  imports: [MaterialModule],
  templateUrl: './role-master.component.html',
  styleUrl: './role-master.component.css',
})
export class RoleMasterComponent {
  displayedColumns: string[] = [
    'RoleName',
    'permission',
    'createdDate',
    'status',
    'action',
  ];

  // Sample data for the table
  dataSource = [
    {
      RoleName: 'John Doe',
      permission: 'Admin',
      createdDate: new Date('10/12/2023'),
      status: 'Active',
    },
    {
      RoleName: 'Jane Smith',
      permission: 'Manager',
      createdDate: new Date('10/12/2023'),
      status: 'Inactive',
    },
    {
      RoleName: 'Jane Smith',
      permission: 'Manager',
      createdDate: new Date('10/12/2023'),
      status: 'Inactive',
    },
    // Add more sample data here
  ];
}

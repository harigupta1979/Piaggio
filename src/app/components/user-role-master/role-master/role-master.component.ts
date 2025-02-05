import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { dbUserRoleService } from '../../service/user-role.service';
import { dbCommonService } from '../../service/commonservice.service';

@Component({
  selector: 'app-role-master',
  imports: [MaterialModule],
  templateUrl: './role-master.component.html',
  styleUrl: './role-master.component.css',
})

export class RoleMasterComponent {
  constructor(private service: dbUserRoleService,private sharedservice: dbCommonService,) {}

  async ngOnInit() {
    await this.getrole();
    await this.getrollist();
   
  }
  displayedColumns: string[] = [
    'RoleName',
    'permission',
    'createdDate',
    'status',
    'action',
  ];
  campaignList: any[] = [];
  list: any[] = [];dataLength=true;
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
  async getrole() {
   
    let dataobj : Record<string, any>| null | undefined= await this.sharedservice.GetSelection("role", '', 0, 0);
    if (dataobj != null) {
      
        this.campaignList = dataobj["Data"];
      
    }
  }
  async getrollist() {
    const obj={
      RoleName:null
    }
    const data = await this.service.GetRoleList(obj);
   
    if(data != null ){
      console.log(data,'data')  
      
      }
      else{
       
        this.dataLength=false;
      }
   
  }
}

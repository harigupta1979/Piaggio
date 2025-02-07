import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { dbUserRoleService } from '../../service/user-role.service';
import { dbCommonService } from '../../service/commonservice.service';
import { dbRoleMenuMappingService } from '../../../Services/rolemenumapping.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-role-master',
  imports: [MaterialModule],
  templateUrl: './role-master.component.html',
  styleUrls: ['./role-master.component.css'],
})
export class RoleMasterComponent implements OnInit {
  isAdmin: boolean = false;
  roleId: number = 0;
  formGroup: FormGroup;
  businessPartnerId: number = 43;
  menuList: any[] = [];
  campaignList: any[] = [];
  list: any[] = [];
  dataLength = true;
  dataSource: any[] = [];
  displayedColumns: string[] = [
    'RoleName',
    'permission',
    'createdDate',
    'status',
    'action',
  ];

  constructor(
    private service: dbUserRoleService,
    private sharedservice: dbCommonService,
    private dbService: dbRoleMenuMappingService,
    private fb: FormBuilder // Inject FormBuilder to initialize the form
  ) {
    // Initialize the form group here
    this.formGroup = this.fb.group({
      IsAdmin: [false], // Assuming IsAdmin is a boolean
      RoleId: [null], // Assuming RoleId is a number
    });
  }

  async ngOnInit() {
    await this.getrole();
    await this.getrollist();
    await this.getMenu(); // Now this method can safely be called after formGroup is initialized
  }

  async getrole() {
    let dataobj: Record<string, any> | null | undefined =
      await this.sharedservice.GetSelection('role', '', 0, 0);

    if (dataobj && dataobj['Data']) {
      this.dataSource = dataobj['Data'].map((item: any) => ({
        RoleName: item.NAME,
        permission: '',
        createdDate: new Date(),
        status: 'Active',
      }));
    }
  }

  async getrollist() {
    const obj = {
      RoleName: null,
    };
    const data = await this.service.GetRoleList(obj);

    if (data != null) {
    } else {
      this.dataLength = false;
    }
  }

  async getMenu() {
    debugger;
    debugger;
    const roleObj = {
      IsAdmin: this.isAdmin,
      RoleId: this.roleId,
      BusinessPartnerId: this.businessPartnerId,
    };
    const data = await this.dbService.GetRoleMenu(roleObj);

    if (data != null) {
    } else {
      this.dataLength = false;
    }
  }
}

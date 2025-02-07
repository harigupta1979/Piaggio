import { Component, Inject } from '@angular/core';
import { AppRoutingModule } from '../../../app-routing.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { dbRoleMenuMappingService } from '../../../Services/rolemenumapping.service';
import { SharedserviceService } from '../../../Services/sharedservice.service';
import { ToastService } from '../../../Services/toast.service';

interface RoleResponse {
  FinalMode: string | null;
  Message: string | null;
}
interface MenuNode {
  name: string;
  id: number;
  menuChk: number;
  IsAdd: number;
  IsEdit: number;
  IsView: number;
  children?: MenuNode[];
  IsSubMenu: Boolean;
  InfoText: string;
  ShowInfo: Boolean;
}
@Component({
  selector: 'app-add-role-form',
  imports: [CommonModule, MaterialModule],
  templateUrl: './add-role-form.component.html',
  styleUrl: './add-role-form.component.css',
})
export class AddRoleFormComponent {
  roleForm: FormGroup;
  submitted = false;
  selectedArray: any = [];
  reportingRoles: string[] = ['HR', 'Sales', 'Development'];
  menuList!: MenuNode[];
  constructor(
    public dialogRef: MatDialogRef<AddRoleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dbService: dbRoleMenuMappingService,
    private sharedService: SharedserviceService,
    private toastr: ToastService
  ) {
    this.roleForm = this.fb.group({
      roleName: ['', Validators.required], // Required field
      reportingRole: ['', Validators.required], // Required field
      description: ['', Validators.maxLength(500)], // Optional field, max length 500
      status: ['active', Validators.required],
      SubMenuId: [null],
    });
  }
  closeDialog(result: boolean): void {
    this.dialogRef.close({ success: result });
  }
  async onSubmit(): Promise<void> {
    debugger;
    this.submitted = true;

    if (this.roleForm.invalid) {
      alert('Form is invalid!');
      return;
    }

    this.roleForm.controls['SubMenuId'].setValue(this.selectedArray.toString());

    try {
      // Call PostService to get the response
      const data = (await this.dbService.PostService(
        this.roleForm.value
      )) as RoleResponse;

      // Log the response for debugging
      console.log('Response from PostService:', data);

      // Check if the response has the expected properties
      if (
        data &&
        (data['FinalMode'] === 'INSERT' ||
          data['FinalMode'] === 'UPDATE' ||
          data['Message'] != null)
      ) {
        alert('Role saved successfully!');
        // await this.addNew(); // Add your logic here
      } else {
        alert('Error saving role!');
      }
    } catch (error) {
      console.error('Error during onSubmit:', error);
      alert('An error occurred while saving the role');
    }
  }
}

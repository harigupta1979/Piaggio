import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../../app-routing.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../shared/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user-form',
  imports: [CommonModule, MaterialModule],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css',
})
export class AddUserFormComponent {
  userForm: FormGroup;
  cities = ['New York', 'Los Angeles', 'Chicago'];
  states = ['California', 'New York', 'Illinois'];
  roles = ['Manager', 'Team Lead', 'Developer'];

  constructor(
    public dialogRef: MatDialogRef<AddUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      dob: [''],
      pinCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      reportingTo: ['', Validators.required],
      status: ['active', Validators.required], // Default to 'active'
    });
  }

  closeDialog(success: boolean): void {
    this.dialogRef.close(success ? this.userForm.value : null);
  }
  onSubmit(): void {
    if (this.userForm.valid) {
      this.dialogRef.close({ success: true, data: this.userForm.value });
    } else {
      this.userForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }
}

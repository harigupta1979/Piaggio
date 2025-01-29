import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../../shared/material.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CryptoService } from '../../Services/crypto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    MaterialModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
  ],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private crypto: CryptoService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      termsAccepted: [false, Validators.requiredTrue],
    });
  }

  async login() {
    this.isSubmitting = true;
    if (this.loginForm.invalid) {
      return;
    }
    const loginForm = {
      username: this.loginForm.controls['username'].value,
      password: this.crypto.encrypt(this.loginForm.controls['password'].value),
    };
    let dt: any = [];
    dt = await this.auth.CheckUserLogin(loginForm);
    console.log(dt, 'dt');
    if (dt != null && dt['FinalMode'] == 'DataFound' && dt['Message'] != '') {
      if (!dt['Data'][0].IS_PWD_CHANGE && dt['Data'][0].AgreementCount <= 0) {
        this.loginForm.reset();
        this.isSubmitting = false;
      } else {
        this.router.navigateByUrl('/resetpassword?u=' + loginForm.username);
      }
      return;
    }
    let data = await this.auth.GetLogin(loginForm);
  }

  get f() {
    return this.loginForm.controls;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Import HttpClientModule properly
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './Services/auth.service';
import { AuthInterceptor } from './interceptors/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule, // ✅ Must be imported to use HTTP requests
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService, // ✅ Provide AuthService correctly
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true, // ✅ Ensures multiple interceptors work
    },
  ],
})
export class AppModule {}

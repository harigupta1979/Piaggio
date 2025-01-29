import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClient } from '@angular/common/http'; // Import HttpClient if needed for DI
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    provideHttpClient(), // Provide the HTTP client here
    // Optionally, add interceptors or other HTTP-related providers if needed
  ],
})
export class AppModule {}

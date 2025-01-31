import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule } from '@angular/router';
import { TopNavbarComponent } from './TopNavBar/top-navbar.component';
import { DaynamicSideNavComponent } from './dashboard/daynamic-side-nav/daynamic-side-nav.component';

@Component({
  selector: 'app-side-nav',
  imports: [
    MaterialModule,
    RouterModule,
    TopNavbarComponent,
    DaynamicSideNavComponent,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenavContainerHarness } from '@angular/material/sidenav/testing';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'

})
export class LayoutComponent {

}

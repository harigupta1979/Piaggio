import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


export const baseRoutes: Routes =[
//   { path: '', component: HomeComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'motor', 
//     component:StepperComponent,
//       loadChildren: () => import('../component/motor/motor.module').then(m => m.MotorModule) 
//      },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(baseRoutes)
  ]
})
export class ComponentModule { }

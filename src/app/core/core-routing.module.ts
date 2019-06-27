import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { Constants } from '../modules/constants/constants.module';

//  Components
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: Constants.ROUTERS.HOME,
    component: LayoutComponent,
    data: { title: 'Dashboard | Home' },
    // children: [
    //   {
    //     path: ,
    //     component: ,
    //   }
    // ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

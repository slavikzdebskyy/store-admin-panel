import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { Constants } from '../modules/constants/constants.module';

//  Components
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';

const routes: Routes = [
  {
    path: Constants.ROUTERS.MAIN,
    component: LayoutComponent,
    data: { title: 'Dashboard' },
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

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { Constants } from './shared/constants/constants.module';

//  Components
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: Constants.ROUTERS.MAIN,
    component: LayoutComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: '**',
    redirectTo: Constants.ROUTERS.MAIN,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

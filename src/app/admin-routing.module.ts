import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

// Modules
import { Constants } from './modules/constants/constants.module';

const routes: Routes = [
  {
    path: Constants.ROUTERS.HOME,
    canActivate: [AuthGuard],
    loadChildren: './core/core.module#CoreModule'
  },
  {
    path: Constants.ROUTERS.LOGIN,
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**',
    redirectTo: Constants.ROUTERS.HOME,
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

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { Constants } from './modules/constants/constants.module';

const routes: Routes = [
  {
    path: Constants.ROUTERS.MAIN,
    loadChildren: './core/core.module#CoreModule'
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

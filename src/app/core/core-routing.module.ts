import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { Constants } from '../shared/constants/constants.module';

//  Components
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Modules
import { MaterialModule } from '../modules/material/material.module';

// Components
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
  import { SharedModule } from './../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ]
})
export class CoreModule { }

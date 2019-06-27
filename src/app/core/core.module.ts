import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { MaterialModule } from '../modules/material/material.module';

// Components
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreRoutingModule,
    SharedModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ]
})
export class CoreModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { MaterialModule } from '../modules/material/material.module';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ]
})
export class CoreModule { }

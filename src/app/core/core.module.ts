import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Modules
import { MaterialModule } from '../shared/material/material.module';

// Components
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [

  CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ]
})
export class CoreModule { }

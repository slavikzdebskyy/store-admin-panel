import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { MaterialModule } from '../modules/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from './../shared/shared.module';

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
    TranslateModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],

})
export class CoreModule { }

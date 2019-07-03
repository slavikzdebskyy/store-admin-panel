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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtService } from '../services/jwt.service';

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
  ],

})
export class CoreModule { }

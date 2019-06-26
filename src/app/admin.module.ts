import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

  // Components
import { AdminComponent } from './admin.component';

  // Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [

  BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AdminComponent],
})
export class AdminModule { }

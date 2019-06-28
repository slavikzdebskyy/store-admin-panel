import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth/auth.guard';

  // Components
import { AdminComponent } from './admin.component';

  // Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    AdminRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AdminComponent],
})
export class AdminModule { }

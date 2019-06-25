import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

  //components
import { AdminComponent } from './admin.component';

  // modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [

  BrowserModule,
    SharedModule,
    CoreModule,
    RouterModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AdminComponent],
})
export class AdminModule { }

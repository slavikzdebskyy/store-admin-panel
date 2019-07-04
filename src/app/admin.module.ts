import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth/auth.guard';

  // Components
import { AdminComponent } from './admin.component';

  // Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

// Services
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtService,
        multi: true,
      },
  ],
  bootstrap: [AdminComponent],
})
export class AdminModule { }

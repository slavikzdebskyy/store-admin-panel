import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth/auth.guard';

  // Components
import { AdminComponent } from './admin.component';

  // Modules
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';

  // Services
import { TranslateToastrService } from './services/translate-toastr.service';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';

export function httpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

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
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    AuthGuard,
    AuthService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtService,
        multi: true,
      },
    TranslateToastrService,
  ],
  bootstrap: [AdminComponent],
})
export class AdminModule { }

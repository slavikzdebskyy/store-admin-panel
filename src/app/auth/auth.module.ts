import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';

// Modules
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from './../modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }

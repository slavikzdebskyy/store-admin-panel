import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { Constants } from 'src/app/modules/constants/constants.module';

// Components
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: Constants.ROUTERS.HOME,
    component: LoginComponent,
    data: {title: 'Dashboard | Login'}
  },
  {
    path: Constants.ROUTERS.RESET_PASS,
    component: ResetPasswordComponent,
    data: {title: 'Dashboard | Reset password'}
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

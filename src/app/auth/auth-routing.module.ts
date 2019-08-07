import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { Constants } from 'src/app/modules/constants/constants.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: Constants.ROUTERS.HOME,
    redirectTo: Constants.ROUTERS.LOGIN,
  },
  {
    path: Constants.ROUTERS.LOGIN,
    component: LoginComponent,
    data: { title: 'Dashboard | Login' },
  },
  {
    path: Constants.ROUTERS.RESETORE_PSWRD,
    component: RestorePasswordComponent,
    data: { title: 'Dashboard | Restore password' },
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

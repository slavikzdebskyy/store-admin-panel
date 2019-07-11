import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { Constants } from 'src/app/modules/constants/constants.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: Constants.ROUTERS.HOME,
    component: LoginComponent,
    data: { title: 'Dashboard | Login' },
  },
  // {
  //   path: Constants.ROUTERS.REGISTRATION,
  // },
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

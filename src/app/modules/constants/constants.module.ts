import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})
export class Constants {

  public static readonly DEAFAULT_LANGUAGE = 'en';

  public static readonly ROUTERS = {
    HOME: '',
    LOGIN: 'login',
    REGISTRATION: 'registration',
  };

  public static readonly ROUTERS_API = {
    ADMIN: {
      LOGIN: '/administrators/login-admin',
    },
  };

  public static readonly STORAGE_KEYS ={
    ADMIN_KEY: 'admin_token',
  };

 }

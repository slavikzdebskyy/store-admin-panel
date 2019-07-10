import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class Constants {

  public static readonly MIN_PASSWORD_LENGTH = 6;

  public static readonly LANGUAGES = {
    DEAFAULT: 'en',
  };

  public static readonly ROUTERS = {
    HOME: '',
    LOGIN: 'login',
    REGISTRATION: 'registration',
    PRODUCTS: 'products',
    ADD_NEW_PRODUCT: 'add-new-product',
    EDIT_PRODUCT: 'edit_product',
    ORDERS: 'orders',
  };

  public static readonly ROUTERS_API = {
    ADMIN: {
      LOGIN: '/administrators/login-admin',
      LOGOUT: '/administrators/logout-admin',
    },
  };

  public static readonly STORAGE_KEYS = {
    ADMIN_KEY: 'admin_token',
  };

 }

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
  public static readonly SECURITY_CODE_LENGTH = 6;
  public static readonly DEFAULT_AVATAR_URL = '/images/image/2ec9775925de0d1a288d741f18e4c347.jpg';

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
    CONFIGURE: 'configure',
    ADMINS: 'admins',
    CUSTOMERS: 'customers',
    MESSAGES: 'messages',
    FEEDBACKS: 'feedbacks',
    RESETORE_PSWRD: 'restore-password',
    AUTH: 'auth',
  };

  public static readonly ROUTERS_API = {
    ADMIN: {
      LOGIN: '/administrators/login-admin',
      LOGOUT: '/administrators/logout-admin',
      SEND_SECUTITY_CODE: '/administrators/restore-password',
      CHECK_CODE: '/administrators/check-security-code',
      CHANGE_PASSWORD: '/administrators/change-password',
    },
  };

  public static readonly STORAGE_KEYS = {
    ADMIN_TOKEN_KEY: 'admin_token',
    ADMIN_DATA_KEY: 'admin_data',
  };

}

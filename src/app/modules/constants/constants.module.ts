import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Constants {

  public static readonly ROUTERS = {
    HOME: '',
    LOGIN: 'login',
    RESET_PASS: 'reset-password'
  }

  public static readonly STORAGE_KEYS ={
    ADMIN_KEY: 'admin_token',
  }
 }

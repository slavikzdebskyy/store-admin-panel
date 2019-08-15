import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { Constants } from '../../../modules/constants/constants.module';
import { Admin } from 'src/app/shared/interfaces/admin.interface';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Output() sideNavEmit = new EventEmitter<boolean>();

  private isSideBarOpen: boolean;
  private admin: Admin;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {
    this.isSideBarOpen = true;
    this.admin = JSON.parse(localStorage.getItem(Constants.STORAGE_KEYS.ADMIN_DATA_KEY) || '');
  }

  public toggleSideNav(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
    this.sideNavEmit.emit(this.isSideBarOpen);
  }

  public logOut(): void {
    this.authService.removeAdminToken();
    this.router.navigate([Constants.ROUTERS.AUTH, Constants.ROUTERS.LOGIN]);
  }

  public get avatarUrl(): string {
    return this.admin &&  this.admin.avatar ?
    `${environment.serverApiUrl}${this.admin.avatar}` :
    `${environment.serverApiUrl}${Constants.DEFAULT_AVATAR_URL}`;
  }

}

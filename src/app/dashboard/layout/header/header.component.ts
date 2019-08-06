import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Constants } from '../../../modules/constants/constants.module';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() sideNavEmit = new EventEmitter<boolean>();

  private isSideBarOpen = true;
  private subs = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  public toggleSideNav(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
    this.sideNavEmit.emit(this.isSideBarOpen);
  }

  public logOut(): void {
    this.authService.removeAdminToken();
    this.router.navigate([Constants.ROUTERS.LOGIN]);
  }

}

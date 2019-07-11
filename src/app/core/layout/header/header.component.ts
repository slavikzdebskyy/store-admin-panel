import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IAuthResponse } from 'src/app/shared/interfaces/auth-api.interfaces';
import { Constants } from './../../../modules/constants/constants.module';
import { TranslateToastrService } from 'src/app/services/translate-toastr.service';

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
    private translateToastrService: TranslateToastrService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  public toggleSideNav(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
    this.sideNavEmit.emit(this.isSideBarOpen);
  }

  public logOut(): void {
    this.subs.add(
      this.authService.logout('qaz@qaz.com')
        .subscribe(
          (res: IAuthResponse) => {
            if (res.status) {
              this.authService.removeAdminToken();
              this.router.navigate([Constants.ROUTERS.LOGIN]);
            }
          },
          (err: HttpErrorResponse) => this.translateToastrService.errorMsg(err.error.message),
      ),
    );
  }

}

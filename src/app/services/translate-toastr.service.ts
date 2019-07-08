import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TranslateToastrService {

  constructor(
    private toastrService: ToastrService,
    private translateService: TranslateService,
    ) {}

  public errorMsg(msg: string): void {
    const translateMsg = this.translateService.instant(msg);
    this.toastrService.error(translateMsg);
  }

  public successMsg(msg: string): void {
    const translateMsg = this.translateService.instant(msg);
    this.toastrService.success(translateMsg);
  }

  public infoMsg(msg: string): void {
    const translateMsg = this.translateService.instant(msg);
    this.toastrService.info(translateMsg);
  }

}

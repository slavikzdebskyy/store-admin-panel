import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, Self, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

  // rxjs
import { Subscription } from 'rxjs';

  // constants
import { Constants } from 'src/app/modules/constants/constants.module';

  // services
import { TranslateToastrService } from 'src/app/services/translate-toastr.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { AuthService } from 'src/app/services/auth.service';

enum Steps {
  checkEmail,
  checkCode,
  newPassword,
}

@Component({
  selector: 'admin-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss'],
  providers: [SpinnerService],
})
export class RestorePasswordComponent implements OnDestroy {

  public readonly EMAIL = 'email';
  public readonly SECURITY_CODE = 'securityCode';
  public readonly PASSWORD = 'password';
  public readonly PASSWORD_CONFIRM = 'passwordConfirm';
  public restorePswrdForm!: FormGroup;
  public hide = true;
  public hideConf = true;
  public step: Steps = Steps.checkEmail;

  private subs: Subscription = new Subscription();
  private readonly constants = Constants;

  constructor(
    private translateToastrService: TranslateToastrService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    @Self() public spinner: SpinnerService,
    ) {
    this.initForm();
  }

  private initForm(): void {
    this.restorePswrdForm = this.formBuilder.group({
      [this.EMAIL]: ['', [Validators.required, Validators.email]],
      [this.SECURITY_CODE]: ['', [
        Validators.required,
        Validators.minLength(this.constants.SECURITY_CODE_LENGTH),
      ]],
      [this.PASSWORD]: ['', [
        Validators.required,
        Validators.minLength(this.constants.MIN_PASSWORD_LENGTH),
      ]],
      [this.PASSWORD_CONFIRM]: ['', [
        Validators.required,
      ]],
    });
  }

  public get isEmailInvalid(): boolean {
    return this.restorePswrdForm.controls[this.EMAIL].hasError(this.EMAIL) ||
      this.restorePswrdForm.controls[this.EMAIL].hasError('required');
  }

  public get isSecurityCodeInvalid(): boolean {
    return this.restorePswrdForm.controls[this.SECURITY_CODE].hasError('minlength') ||
      this.restorePswrdForm.controls[this.SECURITY_CODE].hasError('required');
  }

  public get isNewPasswordsInvalid(): boolean {
    return this.restorePswrdForm.controls[this.PASSWORD].hasError('required') ||
      this.restorePswrdForm.controls[this.PASSWORD].hasError('minlength') ||
      this.restorePswrdForm.controls[this.PASSWORD_CONFIRM].hasError('required') ||
      this.isPasswordsNotEqual;
  }

  public get isPasswordsNotEqual(): boolean {
    return this.restorePswrdForm.controls[this.PASSWORD].value !==
      this.restorePswrdForm.controls[this.PASSWORD_CONFIRM].value;
  }

  public get minLength(): number {
    return this.constants.SECURITY_CODE_LENGTH;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public checkCode(): void {
    if (this.isSecurityCodeInvalid) {
      return;
    }
    this.spinner.show();

    this.subs.add(
      this.authService.checkSecurityCode(
        this.restorePswrdForm.controls['securityCode'].value,
        this.restorePswrdForm.controls['email'].value,
        )
        .subscribe(
          (res) => {
            this.spinner.hide();

            if (res.message) {
              this.translateToastrService.successMsg(res.message);
            }
            this.step = Steps.newPassword;
          },
          (err) => {
            this.spinner.hide();

            this.translateToastrService.errorMsg(err.error.message);
          },
        ),
    );
  }

  public sendCode(): void {
    if (this.isEmailInvalid) {
      return;
    }
    this.spinner.show();

    this.subs.add(
      this.authService.sendSecurityCode(this.restorePswrdForm.controls[this.EMAIL].value)
        .subscribe(
          (res) => {
            this.spinner.hide();

            if (res.message) {
              this.translateToastrService.successMsg(res.message);
            }
            this.step = Steps.checkCode;
          },
          (err) => {
            this.spinner.hide();

            this.translateToastrService.errorMsg(err.error.message);
          },
        ),
    );
  }

  public changePassword(): void {
    if (this.isSecurityCodeInvalid) {
      return;
    }
    this.spinner.show();

    this.subs.add(
      this.authService.changePassword(
        this.restorePswrdForm.controls[this.EMAIL].value,
        this.restorePswrdForm.controls[this.PASSWORD].value,
        this.restorePswrdForm.controls[this.PASSWORD_CONFIRM].value,
        )
        .subscribe(
          (res) => {
            this.spinner.hide();

            if (res.message) {
              this.translateToastrService.successMsg(res.message);
            }
            this.toLogin();
          },
          (err) => {
            this.spinner.hide();

            this.translateToastrService.errorMsg(err.error.message);
          },
        ),
    );
  }

  public toLogin(): void {
    this.router.navigate([Constants.ROUTERS.AUTH, Constants.ROUTERS.LOGIN]);
  }

}

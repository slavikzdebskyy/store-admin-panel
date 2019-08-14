import { Component, OnDestroy, Self } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

  // rxjs
import { Subscription } from 'rxjs';

  // constants
import { Constants } from 'src/app/modules/constants/constants.module';

  // services
import { SpinnerService } from './../../shared/services/spinner.service';
import { TranslateToastrService } from 'src/app/services/translate-toastr.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SpinnerService],
})
export class LoginComponent implements OnDestroy {

  public loginForm: FormGroup;
  public hide = true;
  private subs: Subscription = new Subscription();
  private readonly constants = Constants;

  constructor(
    private translateToastrService: TranslateToastrService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    @Self() public spinner: SpinnerService,
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.constants.MIN_PASSWORD_LENGTH)]],
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public onLogin(): void {
    if (this.loginForm.valid) {

      this.spinner.show();

      this.subs.add(
        this.authService
          .login(this.loginForm.getRawValue())
          .subscribe(
            (res) => {
              this.spinner.hide();

              localStorage.setItem(this.constants.STORAGE_KEYS.ADMIN_KEY, res.token || '');
              this.router.navigate([Constants.ROUTERS.HOME]);
            },
            (err) => {
              this.spinner.hide();

              this.translateToastrService.errorMsg(err.error.message);
            },
          ),
      );
    }
  }

  public toRestorePassword(): void {
    this.router.navigate([Constants.ROUTERS.AUTH, Constants.ROUTERS.RESETORE_PSWRD]);
  }
}

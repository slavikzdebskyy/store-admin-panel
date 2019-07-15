import { TranslateToastrService } from 'src/app/services/translate-toastr.service';
import { Constants } from 'src/app/modules/constants/constants.module';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
      this.subs.add(
        this.authService
          .login(this.loginForm.getRawValue())
          .subscribe(
            (res) => {
              localStorage.setItem(this.constants.STORAGE_KEYS.ADMIN_KEY, res.token || '');
              this.router.navigate([Constants.ROUTERS.HOME]);
            },
            err => this.translateToastrService.errorMsg(err.error.message),
          ),
      );
    }
  }
}

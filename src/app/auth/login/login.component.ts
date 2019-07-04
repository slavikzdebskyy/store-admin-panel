import { Component, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/modules/constants/constants.module';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {

  public loginForm: FormGroup;
  public hide = true;
  private subs: Subscription = new Subscription();
  private readonly STORAGE_KEYS = Constants.STORAGE_KEYS;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public onLogin(): void {
    this.subs.add(
      this.authService
        .login(this.loginForm.getRawValue())
        .subscribe(
          res => {
            localStorage.setItem(this.STORAGE_KEYS.ADMIN_KEY, res.token);
            this.router.navigate([Constants.ROUTERS.HOME]);
          },
          err => console.log(err.error.message) // TODO implment toastr service
        )
    )
  }
}

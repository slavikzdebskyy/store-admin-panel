import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  public hide = true;

  private subs: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public onLogin(): void {
    this.subs.add(
      this.authService
        .login(this.loginForm.getRawValue())
        .subscribe(
          res => console.log(res),
          err => console.log(err.error.message)
        )
    )
  }
}

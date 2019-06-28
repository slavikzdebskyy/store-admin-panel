import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Constants } from 'src/app/modules/constants/constants.module';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth-styles.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide = true;
  public constants = Constants;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  public onSubmit(): void {  // TODO implement logic
    console.log('Credentials => ', this.loginForm.getRawValue());
    this.loginForm.reset();
  }

}

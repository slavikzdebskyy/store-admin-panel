import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Constants } from 'src/app/modules/constants/constants.module';

@Component({
  selector: 'admin-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../auth-styles.scss']
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;
  public constants = Constants;

  constructor() {
    this.resetPasswordForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }

  public getErrorMessage(): string {
    return this.resetPasswordForm.controls['email'].hasError('required') ? 'You must enter a value' :
      this.resetPasswordForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  public onSubmit():void { // TODO imlement logic
    console.log('Email => ', this.resetPasswordForm.getRawValue());
    this.resetPasswordForm.reset();
  }

}

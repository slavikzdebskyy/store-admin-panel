import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RestorePasswordComponent } from './restore-password.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateToastrService } from 'src/app/services/translate-toastr.service';
import { of } from 'rxjs';

class AuthServiceMock {
  public login() { return of({}); }
}

describe('RestorePasswordComponent', () => {
  let component: RestorePasswordComponent;
  let fixture: ComponentFixture<RestorePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestorePasswordComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: TranslateToastrService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

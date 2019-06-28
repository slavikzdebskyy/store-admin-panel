import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

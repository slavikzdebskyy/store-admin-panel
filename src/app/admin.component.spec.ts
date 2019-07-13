import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

// Components
import { AdminComponent } from './admin.component';

class TranslateServiceMock {
  setDefaultLang() {}
  use() {}
}

describe('AdminComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
      ],
    }).compileComponents();
  }));

  it('should create the admin', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

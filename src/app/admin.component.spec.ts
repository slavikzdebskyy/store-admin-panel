import { TestBed, async } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  it('should create the admin', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'store-admin-panel'`, () => {
  //   const fixture = TestBed.createComponent(AdminComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('store-admin-panel');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AdminComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to store-admin-panel!');
  // });
});

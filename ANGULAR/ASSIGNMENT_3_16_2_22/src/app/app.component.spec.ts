import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ASSIGNMENT_3_16_2_22'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ASSIGNMENT_3_16_2_22');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log("here", compiled.querySelector('.content span')?.textContent);
    expect(compiled.querySelector('.content span')?.textContent).toContain('ASSIGNMENT_3_16_2_22');
  });
  it('add two number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    let result = app.add(10, 20);
    expect(result).toEqual(30);
  });
  it('login validation', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    let result = app.login("admin", "admin");
    expect(result).toEqual(true);
  });
  it('factorial....', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    let result = app.factorial(5);
    expect(result).toEqual(120);
  });
});

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EnviroApp } from './enviro.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EnviroApp
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EnviroApp);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Enviro'`, () => {
    const fixture = TestBed.createComponent(EnviroApp);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Enviro');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EnviroApp);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Enviro app is running!');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryShellComponent } from './country-shell.component';

describe('CountryShellComponent', () => {
  let component: CountryShellComponent;
  let fixture: ComponentFixture<CountryShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

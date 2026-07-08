import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Leftsidebar } from './leftsidebar';

describe('Leftsidebar', () => {
  let component: Leftsidebar;
  let fixture: ComponentFixture<Leftsidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leftsidebar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Leftsidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

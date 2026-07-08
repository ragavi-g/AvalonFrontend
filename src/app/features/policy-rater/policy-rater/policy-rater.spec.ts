import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyRater } from './policy-rater';

describe('PolicyRater', () => {
  let component: PolicyRater;
  let fixture: ComponentFixture<PolicyRater>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyRater],
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyRater);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

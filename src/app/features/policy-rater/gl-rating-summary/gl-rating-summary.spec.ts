import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlRatingSummary } from './gl-rating-summary';

describe('GlRatingSummary', () => {
  let component: GlRatingSummary;
  let fixture: ComponentFixture<GlRatingSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlRatingSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(GlRatingSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

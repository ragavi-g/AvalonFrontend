import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRating } from './property-rating';

describe('PropertyRating', () => {
  let component: PropertyRating;
  let fixture: ComponentFixture<PropertyRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyRating],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyRating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

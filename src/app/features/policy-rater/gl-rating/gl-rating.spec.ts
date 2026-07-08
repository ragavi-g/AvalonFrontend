import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlRating } from './gl-rating';
import { RatingScreenHeader } from '../../../shared/utils/functions/rating-screen-header';

describe('GlRating', () => {
  let component: GlRating;
  let fixture: ComponentFixture<GlRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlRating],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: RatingScreenHeader,
          useValue: {
            getAccountId: () => '6490',
            getRatingPeriodId: () => '7',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GlRating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

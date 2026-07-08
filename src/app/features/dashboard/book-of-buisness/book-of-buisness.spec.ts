import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfBuisness } from './book-of-buisness';

describe('BookOfBuisness', () => {
  let component: BookOfBuisness;
  let fixture: ComponentFixture<BookOfBuisness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookOfBuisness],
    }).compileComponents();

    fixture = TestBed.createComponent(BookOfBuisness);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

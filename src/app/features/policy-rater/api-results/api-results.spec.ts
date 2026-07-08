import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResults } from './api-results';

describe('ApiResults', () => {
  let component: ApiResults;
  let fixture: ComponentFixture<ApiResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiResults],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiResults);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

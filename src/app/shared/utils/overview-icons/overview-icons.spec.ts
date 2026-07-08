import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewIcons } from './overview-icons';

describe('OverviewIcons', () => {
  let component: OverviewIcons;
  let fixture: ComponentFixture<OverviewIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewIcons],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

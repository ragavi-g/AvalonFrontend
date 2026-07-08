import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovImportedItems } from './sov-imported-items';

describe('SovImportedItems', () => {
  let component: SovImportedItems;
  let fixture: ComponentFixture<SovImportedItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SovImportedItems],
    }).compileComponents();

    fixture = TestBed.createComponent(SovImportedItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

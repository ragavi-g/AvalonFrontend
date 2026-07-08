import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavIcon } from './sidebar-nav-icon';

describe('SidebarNavIcon', () => {
  let component: SidebarNavIcon;
  let fixture: ComponentFixture<SidebarNavIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavIcon);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('icon', 'quotes');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

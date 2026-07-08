import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowIcons } from './workflow-icons';

describe('WorkflowIcons', () => {
  let component: WorkflowIcons;
  let fixture: ComponentFixture<WorkflowIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowIcons],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkflowIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

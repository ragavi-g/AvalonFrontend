import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { POLICY_RATER_NAV_ITEMS } from '../../config/policy-rater-navigation';
import { RatingScreenHeader } from '../../utils/functions/rating-screen-header';
import { buildWorkflowSteps, getMetaClasses, getStepClasses, getTitleClasses, type WorkflowStepView } from '../../config/workflow-steps';
import { WorkflowIcons } from '../../utils/workflow-icons/workflow-icons';

@Component({
  selector: 'app-workflow-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, WorkflowIcons],
  templateUrl: './workflow-header.html',
  styleUrl: './workflow-header.scss',
})
export class WorkflowHeader {
  readonly navItems = POLICY_RATER_NAV_ITEMS;
  workflowSteps: WorkflowStepView[] = buildWorkflowSteps('');
  menuOpen = false;
  constructor(private readonly ratingScreenHeader: RatingScreenHeader) {
    this.ratingScreenHeader.glStatus$.subscribe(status => {
      this.workflowSteps = buildWorkflowSteps(status);
    });
  }
  getStepClasses = getStepClasses;
  getTitleClasses = getTitleClasses;
  getMetaClasses = getMetaClasses;

  toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click')
  closeMenu(): void {
    this.menuOpen = false;
  }
}

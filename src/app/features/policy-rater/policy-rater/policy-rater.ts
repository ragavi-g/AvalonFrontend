import { Component } from '@angular/core';
import { WorkflowHeader } from '../../../shared/components/workflow-header/workflow-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-policy-rater',
  imports: [WorkflowHeader, RouterOutlet],
  templateUrl: './policy-rater.html',
  styleUrl: './policy-rater.scss',
})
export class PolicyRater {}

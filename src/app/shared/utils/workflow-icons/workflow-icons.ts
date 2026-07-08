import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-workflow-icons',
  imports: [CommonModule],
  templateUrl: './workflow-icons.html',
  styleUrl: './workflow-icons.scss',
})
export class WorkflowIcons {
  icon = input<string>();
}

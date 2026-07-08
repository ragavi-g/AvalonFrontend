import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-overview-icons',
  imports: [CommonModule],
  templateUrl: './overview-icons.html',
  styleUrl: './overview-icons.scss',
})
export class OverviewIcons {
  icon = input<string>();
}

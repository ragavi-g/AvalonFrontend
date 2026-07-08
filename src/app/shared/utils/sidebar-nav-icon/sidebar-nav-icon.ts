import { Component, input } from '@angular/core';
import { SidebarIconId } from '../../config/navigation';

@Component({
  selector: 'app-sidebar-nav-icon',
  standalone: true,
  templateUrl: './sidebar-nav-icon.html',
  styleUrl: './sidebar-nav-icon.scss',
})
export class SidebarNavIcon {
  icon = input.required<SidebarIconId>();
}

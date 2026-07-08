import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { getActiveNavPath, isSidebarIconId, NAV_ITEMS } from '../../config/navigation';
import { SidebarNavIcon } from '../../utils/sidebar-nav-icon/sidebar-nav-icon';

@Component({
  selector: 'app-leftsidebar',
  standalone: true,
  imports: [RouterLink, SidebarNavIcon],
  templateUrl: './leftsidebar.html',
  styleUrl: './leftsidebar.scss',
})
export class Leftsidebar {
  /** When false, sidebar is visually hidden (layout width collapses via parent gutter). */
  @Input() isOpen = false;

  readonly navItems = NAV_ITEMS;
  readonly isSidebarIconId = isSidebarIconId;

  readonly user = {
    initial: 'G',
    name: 'Joe Freddy',
    email: 'joe_f@trigent.com',
  };

  constructor(private readonly router: Router) { }

  isActive(path: string): boolean {
    return getActiveNavPath(this.router.url) === path;
  }
}

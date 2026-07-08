import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { Leftsidebar } from '../../components/leftsidebar/leftsidebar';
import { Topbar } from '../../components/topbar/topbar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Topbar, Leftsidebar, RouterOutlet, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  /** Start open so content area matches pushed layout by default */
  sidebarOpen = signal(true);

  toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }
}

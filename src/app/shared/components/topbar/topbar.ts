import {
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { getNavLabelForUrl } from '../../config/navigation';
import { POLICY_RATER_NAV_ITEMS } from '../../config/policy-rater-navigation';
import { RatingScreenHeader } from '../../utils/functions/rating-screen-header';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  readonly userInitial = 'S';
  readonly userEmail = 'subalaxmi_v@trigent.com';
  readonly notificationCount = signal(2);
  ratingScreenTitle = '';
  accountName = '';

  sidebarOpen = input(true);
  menuToggle = output<void>();
  logout = output<void>();

  userMenuOpen = signal(false);

  private readonly host = inject(ElementRef);
  private readonly router = inject(Router);

  private readonly pageHeaderService = inject(RatingScreenHeader);
  isPolicyRater = this.isPolicyRaterRoute(this.router.url);

  constructor() {
    this.pageHeaderService.ratingScreenTitle$.subscribe((title) => {
      this.ratingScreenTitle = title;
    });

    this.pageHeaderService.accountName$.subscribe((name) => {
      this.accountName = name;
    });

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isPolicyRater = this.isPolicyRaterRoute(this.router.url);
        if (!this.isPolicyRater) {
          this.pageHeaderService.clear();
        }
      });
  }

  readonly pageLabel = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => getNavLabelForUrl(this.router.url)),
      startWith(getNavLabelForUrl(this.router.url)),
    ),
    { initialValue: getNavLabelForUrl(this.router.url) },
  );

  onMenuClick(): void {
    this.menuToggle.emit();
  }

  toggleUserMenu(event: Event): void {
    event.stopPropagation();
    this.userMenuOpen.update((open) => !open);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.userMenuOpen()) {
      return;
    }

    const menu = this.host.nativeElement.querySelector('.topbar-user-menu');
    if (menu && !menu.contains(event.target as Node)) {
      this.userMenuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.userMenuOpen.set(false);
  }

  private isPolicyRaterRoute(url: string): boolean {
    return POLICY_RATER_NAV_ITEMS.some((item) => url.includes(item.path));
  }
}

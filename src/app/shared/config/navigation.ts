import { POLICY_RATER_NAV_ITEMS } from './policy-rater-navigation';

export type SidebarIconId =
  | 'sov-imported-items'
  | 'approval-list'
  | 'submission-list'
  | 'quotes'
  | 'admin'
  | 'book-of-buisness';

export interface NavItem {
  label: string;
  path: string;
  /** Font Awesome class string or custom sidebar SVG id */
  icon: SidebarIconId | string;
}

const POLICY_RATER_PATHS = POLICY_RATER_NAV_ITEMS.map((item) =>
  item.path.replace(/^\/+/, '')
);

/** Sidebar routes rendered under MainLayout (`/` + path). */

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Overview',
    path: 'overview',
    icon: 'fa-regular fa-house',
  },
  {
    label: 'Recieve SOV Imported Items',
    path: 'sov-imported-items',
    icon: 'sov-imported-items',
  },
  {
    label: 'Approval List',
    path: 'approval-list',
    icon: 'approval-list',
  },
  {
    label: 'Submission List',
    path: 'submission-list',
    icon: 'submission-list',
  },
  {
    label: 'Quotes',
    path: 'quotes',
    icon: 'quotes',
  },
  {
    label: 'Avalon Admin',
    path: 'admin',
    icon: 'admin',
  },
  {
    label: 'Bound Book of Business',
    path: 'book-of-buisness',
    icon: 'book-of-buisness',
  },
];

/** First path segment after `/` (e.g. `overview` from `/overview`). */
export function getActiveNavPath(url: string): string {
  const pathname = url.split('?')[0].split('#')[0];
  const segment = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)[0];
  if (segment && POLICY_RATER_PATHS.includes(segment)) {
    return 'submission-list';
  }
  return segment ?? 'overview';
}

export function getNavLabelForUrl(url: string): string {
  const path = getActiveNavPath(url);
  return NAV_ITEMS.find((item) => item.path === path)?.label ?? '';
}

export function isSidebarIconId(icon: string): icon is SidebarIconId {
  return (
    icon === 'sov-imported-items' ||
    icon === 'approval-list' ||
    icon === 'submission-list' ||
    icon === 'quotes' ||
    icon === 'admin' ||
    icon === 'book-of-buisness'
  );
}

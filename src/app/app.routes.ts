import { Routes } from '@angular/router';
import { AuthLayout } from './shared/layouts/auth-layout/auth-layout';
import { MainLayout } from './shared/layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: AuthLayout,
        children: [
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full',
          },
          {
            path: 'overview',
            loadComponent: () =>
              import(
                './features/dashboard/company-overview/company-overview'
              ).then((m) => m.CompanyOverview),
          },
          {
            path: 'sov-imported-items',
            loadComponent: () =>
              import(
                './features/dashboard/sov-imported-items/sov-imported-items'
              ).then((m) => m.SovImportedItems),
          },
          {
            path: 'approval-list',
            loadComponent: () =>
              import(
                './features/dashboard/approval-list/approval-list'
              ).then((m) => m.ApprovalList),
          },
          {
            path: 'submission-list',
            loadComponent: () =>
              import(
                './features/dashboard/submission-list/submission-list'
              ).then((m) => m.SubmissionList)
          },
          {
            path: '',
            loadComponent: () =>
              import(
                './features/policy-rater/policy-rater/policy-rater'
              ).then((m) => m.PolicyRater),
            children: [
              {
                path: 'account-summary',
                loadComponent: () =>
                  import(
                    './features/policy-rater/account-summary/account-summary'
                  ).then((m) => m.AccountSummary),
              },
              {
                path: 'property-rating',
                loadComponent: () =>
                  import(
                    './features/policy-rater/property-rating/property-rating'
                  ).then((m) => m.PropertyRating),
              },
              {
                path: 'gl-rating',
                loadComponent: () =>
                  import('./features/policy-rater/gl-rating/gl-rating').then(
                    (m) => m.GlRating
                  ),
              },
              {
                path: 'gl-rating-summary',
                loadComponent: () =>
                  import(
                    './features/policy-rater/gl-rating-summary/gl-rating-summary'
                  ).then((m) => m.GlRatingSummary),
              },
              {
                path: 'api-results',
                loadComponent: () =>
                  import('./features/policy-rater/api-results/api-results').then(
                    (m) => m.ApiResults
                  ),
              },
            ],
          },
          {
            path: 'quotes',
            loadComponent: () =>
              import('./features/dashboard/quotes/quotes').then(
                (m) => m.Quotes
              ),
          },
          {
            path: 'admin',
            loadComponent: () =>
              import('./features/dashboard/admin/admin').then(
                (m) => m.Admin
              ),
          },
          {
            path: 'book-of-buisness',
            loadComponent: () =>
              import(
                './features/dashboard/book-of-buisness/book-of-buisness'
              ).then((m) => m.BookOfBuisness),
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' },
];

export interface PolicyRaterNavItem {
    label: string;
    path: string;
}

export const POLICY_RATER_NAV_ITEMS: PolicyRaterNavItem[] = [
    {
        label: 'Account Summary',
        path: '/account-summary',
    },
    {
        label: 'Property Rating',
        path: '/property-rating',
    },
    {
        label: 'GL Rating',
        path: '/gl-rating',
    },
    {
        label: 'GL Rating Summary',
        path: '/gl-rating-summary',
    },
    {
        label: 'API Results',
        path: '/api-results',
    },
];
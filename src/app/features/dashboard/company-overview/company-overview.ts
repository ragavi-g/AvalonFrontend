import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewIcons } from '../../../shared/utils/overview-icons/overview-icons';

@Component({
  imports: [CommonModule, OverviewIcons],
  selector: 'app-company-overview',
  templateUrl: './company-overview.html',
  styleUrl: './company-overview.scss',
})
export class CompanyOverview {
  statsCards = [
    {
      label: 'Total Submissions',
      number: '1,248',
      change: { percentage: '12.5%', period: 'vs last month', type: 'positive', icon: 'up-arrow' },
      icon: 'sov-imported-items',
      cardClass: 'total-submissions-card'
    },
    {
      label: 'Approved',
      number: '842',
      change: { percentage: '8.3%', period: 'vs last month', type: 'positive', icon: 'up-arrow' },
      icon: 'approval-list',
      cardClass: 'approved-card'
    },
    {
      label: 'In Review',
      number: '256',
      change: { percentage: '4.1%', period: 'vs last month', type: 'negative', icon: 'down-arrow' },
      icon: 'submission-list',
      cardClass: 'in-review-card'
    },
    {
      label: 'Bound Policies',
      number: '1,042',
      change: { percentage: '15.7%', period: 'vs last month', type: 'positive', icon: 'up-arrow' },
      icon: 'bound-policies',
      cardClass: 'bound-policies-card'
    }
  ];

  featureCards = [
    {
      title: 'COST SAVINGS',
      description: 'Our technology and data analysis systems allow us to accurately assess risks and provide coverage that is priced substantially lower.',
      image: 'images/cost-savings.png',
      alt: 'Cost Saving',
      iconClass: 'pink',
      titleClass: 'red-text'
    },
    {
      title: 'SPEED',
      description: 'We provide preliminary property rating, certificates of insurance, per property premium allocations, and Lender required changes in a fraction of the time it takes others.',
      image: 'images/speed.png',
      alt: 'Speed',
      iconClass: 'blue',
      titleClass: 'blue-text'
    },
    {
      title: 'COMMUNICATION',
      description: 'Solution-oriented, same-day responses with consistent follow up throughout the quoting, renewal, and claims process.',
      image: 'images/communication.png',
      alt: 'Communication',
      iconClass: 'green',
      titleClass: 'green-text'
    },
    {
      title: 'TRANSPARENCY',
      description: 'We proactively explain coverage requirements and premium savings, pricing changes, estimates, and market changes that influence premiums.',
      image: 'images/transperency.png',
      alt: 'Transparency',
      iconClass: 'yellow',
      titleClass: 'yellow-text'
    }
  ];

  activityItems = [
    {
      icon: 'approved-activity',
      text: '<strong>Submission S-2024-1021</strong> was approved',
      location: 'Riverdale Commercial Hub',
      time: '2h ago',
      iconClass: ''
    },
    {
      icon: 'in-review',
      text: '<strong>Submission S-2024-1022</strong> moved to in review',
      location: 'Lakeside Office Park',
      time: '3h ago',
      iconClass: 'review'
    },
    {
      icon: 'received',
      text: 'New submission <strong>S-2024-1023</strong> received',
      location: 'Pineview Apartments',
      time: '5h ago',
      iconClass: ''
    },
    {
      icon: 'sent',
      text: '<strong>Quote Q-2024-8871</strong> has been sent',
      location: 'Greenfield Retail Center',
      time: '1d ago',
      iconClass: ''
    }
  ];

  quickActions = [
    {
      title: 'New Submission',
      subtitle: 'Create a new submission',
      icon: 'new-submission',
      cardClass: 'new-submission-card'
    },
    {
      title: 'Upload SOV',
      subtitle: 'Upload SOV and process items',
      icon: 'upload-sov',
      cardClass: 'upload-sov-card'
    },
    {
      title: 'Search Submissions',
      subtitle: 'Search and view submissions',
      icon: 'search-submission',
      cardClass: 'search-submissions-card'
    },
    {
      title: 'Approval List',
      subtitle: 'Review and take actions',
      icon: 'approval-list-card',
      cardClass: 'approval-list-card'
    },
    {
      title: 'Create Quote',
      subtitle: 'Create new insurance quote',
      icon: 'create-quote',
      cardClass: 'create-quote-card'
    },
    {
      title: 'Reports & Analytics',
      subtitle: 'View performance and insights',
      icon: 'reports-analytics',
      cardClass: 'reports-analytics-card'
    }
  ];
}

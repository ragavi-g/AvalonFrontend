export interface ExecuteTaskOption {
  label: string;
  description: string;
}

export interface CoverageOption {
  id: string;
  label: string;
}

export const EXECUTE_TASK_OPTIONS: ExecuteTaskOption[] = [
  {
    label: 'Remove Submission',
    description: 'Navigate to Policy Rating Screen',
  },
  {
    label: 'Indicate',
    description: 'Creation Indication',
  },
  {
    label: 'Indication Accepted',
    description: 'Move to Submission',
  },
  {
    label: 'Submit for Approval',
    description: 'Submit for Approval',
  },
  {
    label: 'Submition Approved',
    description: 'Approved for Submission',
  },
];

export const COVERAGE_OPTIONS: CoverageOption[] = [
  { id: 'gl', label: 'GL' },
  { id: 'property', label: 'Property' },
  { id: 'combined', label: 'Combined GL and Property' },
];

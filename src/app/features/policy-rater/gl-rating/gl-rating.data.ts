export type GlStatusVariant =
  | 'submitted'
  | 'review'
  | 'indication'
  | 'submit'
  | 'quote'
  | 'bound';

export const GL_RATING_DEFAULT_LOCATION_OPTION = {
  value: '',
  label: 'All',
} as const;

export const GL_STATUS_LABELS: Record<GlStatusVariant, string> = {
  submitted: 'Submitted',
  review: 'Review',
  indication: 'Indication',
  submit: 'Submit',
  quote: 'Quote',
  bound: 'Bound',
};

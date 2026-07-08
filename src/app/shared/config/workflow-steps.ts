export type WorkflowStepId =
  | 'review'
  | 'indication'
  | 'submit'
  | 'quote'
  | 'bound'
  | 'endst';

export type WorkflowStepState = 'complete' | 'in-progress' | 'disabled';
export type WorkflowSvgVariant = 'active' | 'default';

export interface WorkflowStepConfig {
  id: WorkflowStepId;
  label: string;
  iconType: 'image';
  icon?: string;
}

export interface WorkflowStepView extends WorkflowStepConfig {
  state: WorkflowStepState;
  meta: string;
  svgVariant: WorkflowSvgVariant;
  isDead?: boolean;
}

interface WorkflowStatusRule {
  complete: WorkflowStepId;
  inProgress: WorkflowStepId;
  completeAll?: boolean;
}

export const WORKFLOW_STEPS: WorkflowStepConfig[] = [
  { id: 'review', label: 'Review', iconType: 'image', icon: 'GL Status Icons/gl_review_icon.png' },
  { id: 'indication', label: 'Indication', iconType: 'image', icon: 'GL Status Icons/gl_indication_icon.png' },
  { id: 'submit', label: 'Submit for Approval', iconType: 'image', icon: 'GL Status Icons/gl_submit_for_approval_icon.png' },
  { id: 'quote', label: 'Quote', iconType: 'image', icon: 'GL Status Icons/gl_quote_icon.png' },
  { id: 'bound', label: 'Bound', iconType: 'image', icon: 'GL Status Icons/gl_bound_icon.png' },
  { id: 'endst', label: 'ENDST', iconType: 'image', icon: 'GL Status Icons/gl_endst_icon.png' },
];

const STATUS_RULES: Record<string, WorkflowStatusRule> = {
  review: { complete: 'review', inProgress: 'review' },
  indication: { complete: 'review', inProgress: 'indication' },
  submission: { complete: 'indication', inProgress: 'submit' },
  quote: { complete: 'submit', inProgress: 'quote' },
  bound: { complete: 'quote', inProgress: 'bound' },
  'bound-endst': { complete: 'bound', inProgress: 'endst' },
  cancelled: { complete: 'endst', inProgress: 'endst', completeAll: true },
};

export const WORKFLOW_STEP_ORDER = WORKFLOW_STEPS.map(step => step.id);

export function buildWorkflowSteps(status: string): WorkflowStepView[] {
  const normalized = status.trim().toLowerCase();
  const rule = STATUS_RULES[normalized];
  const isCancelled = normalized === 'cancelled';
  const completeIds = new Set<WorkflowStepId>();
  const inProgressIds = new Set<WorkflowStepId>();

  if (!rule) {
    return WORKFLOW_STEPS.map(step => buildStepView(step, 'disabled', isCancelled));
  }

  if (rule.completeAll) {
    WORKFLOW_STEPS.forEach(step => completeIds.add(step.id));
  }
  else {
    const inProgressIndex = WORKFLOW_STEP_ORDER.indexOf(rule.inProgress);

    WORKFLOW_STEPS.forEach((step, index) => {
      if (index < inProgressIndex) {
        completeIds.add(step.id);
      } else if (index === inProgressIndex) {
        inProgressIds.add(step.id);
      }
    });
  }

  return WORKFLOW_STEPS.map(step => {
    if (completeIds.has(step.id)) {
      return buildStepView(step, 'complete', isCancelled);
    }
    if (inProgressIds.has(step.id)) {
      return buildStepView(step, 'in-progress', isCancelled);
    }
    return buildStepView(step, 'disabled', isCancelled);
  });
}

export function getStepClasses(
  step: WorkflowStepView,
  // isFirst: boolean,
): Record<string, boolean> {
  return {
    // 'workflow-step-svg--first': isFirst,
    'workflow-step-svg--complete': step.state === 'complete',
    'workflow-step-svg--in-progress': step.state === 'in-progress',
    'workflow-step-svg--disabled': step.state === 'disabled',
    'workflow-step-svg--dead': Boolean(step.isDead)
  };
}

export function getTitleClasses(step: WorkflowStepView): Record<string, boolean> {
  return {
    'workflow-step__title--complete': step.state === 'complete',
    'workflow-step__title--active': step.state === 'in-progress',
    'workflow-step__title--disabled': step.state === 'disabled',
    'workflow-step__title--dead': Boolean(step.isDead),
  };
}

export function getMetaClasses(step: WorkflowStepView): Record<string, boolean> {
  return {
    'workflow-step__meta--disabled': step.state === 'disabled',
  };
}

function buildStepView(
  step: WorkflowStepConfig,
  state: WorkflowStepState,
  isCancelled: boolean,
): WorkflowStepView {
  const isDead = isCancelled && step.id === 'endst';
  const meta =
    isDead ? 'Cancelled' : state === 'complete' ? 'Completed' : state === 'in-progress' ? 'In Progress' : 'Pending';
  return {
    ...step,
    label: isDead ? 'Dead' : step.label,
    icon: isDead ? 'images/gl_dead_icon.png' : step.icon,
    state,
    meta,
    svgVariant: getSvgVariant(state, step.label),
    isDead,
  };
}

function getSvgVariant(
  state: WorkflowStepState,
  label: string,
): WorkflowSvgVariant {
  if (state === 'in-progress') {
    return 'active';
  }
  return 'default';
}

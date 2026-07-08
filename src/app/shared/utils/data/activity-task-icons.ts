/** Maps TaskID from policy_tasks API to icon filenames under public/Activity List Icons. */
export const ACTIVITY_TASK_ICON_MAP: Readonly<Record<number, string>> = {
  10: 'Create New Account.png',
  11: 'Add to existing Account.png',
  24: 'Submission Approved.png',
  30: 'Create Quote.png',
  33: 'Bind Policy.png',
  40: 'Retrieve Policy.png',
  61: 'Property Endorsement Reports.png',
  62: 'General Endorsement.png',
  65: 'Renew Policy.png',
  71: 'Generate Binder.png',
  81: 'Indication Accepted.png',
  82: 'Indication Accepted.png',
  83: 'Indication Accepted.png',
};

const ACTIVITY_ICON_BASE_PATH = '/Activity List Icons';

export function getActivityTaskIconPath(taskId: number | undefined): string {
  if (taskId == null) {
    return '';
  }
  const fileName = ACTIVITY_TASK_ICON_MAP[taskId];
  if (!fileName) {
    return '';
  }
  return encodeURI(`${ACTIVITY_ICON_BASE_PATH}/${fileName}`);
}

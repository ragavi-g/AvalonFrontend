const BASE = 'http://localhost:3005';

export const API_ENDPOINTS = {
  submissionListAccountListUrl: `${BASE}/master_policies`,
  submissionListAccountListActivityUrl: `http://localhost:3001/policy_tasks`,
  glRatingTabLocationUrl: `http://localhost:3006/policy_general_liability`,
  glRatingTabPolicyInputsUrl: `http://localhost:3002/gl/master_policies`,
  glRatingTabUnderwritingReviewUrl: `http://localhost:3004/gl/under_writing`,
  glRatingTabRatingUrl: `http://localhost:3003/gl/rating_screen`,
};
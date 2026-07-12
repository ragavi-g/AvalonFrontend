const BASE = 'https://avalonapibackend-ftgxcegucedechax.eastasia-01.azurewebsites.net';

// export const API_ENDPOINTS = {
//   submissionListAccountListUrl: `https://avalonvmasterpolicies-bmcnaag0fac5ejeg.eastasia-01.azurewebsites.net/master_policies`,
//   submissionListAccountListActivityUrl: `https://avalonbackend-gsbqd8gwbebdanhw.eastasia-01.azurewebsites.net/policy_tasks`,
//   glRatingTabLocationUrl: `https://avalonvpolicygeneralliability-beadh9bdcffacnfh.eastasia-01.azurewebsites.net/policy_general_liability`,
//   glRatingTabPolicyInputsUrl: `https://avalonbackend1-guhkbqb5f0ereheq.eastasia-01.azurewebsites.net/gl/master_policies`,
//   glRatingTabUnderwritingReviewUrl: `https://avalonvglunderwriting-d2ggcyfyedd6fcd3.eastasia-01.azurewebsites.net/gl/under_writing`,
//   glRatingTabRatingUrl: `https://avalonvglratingscreen-hvh2aadmhme5h2d7.eastasia-01.azurewebsites.net/gl/rating_screen`,
// };

export const API_ENDPOINTS = {
  submissionListAccountListUrl: `${BASE}/master_policies`,
  submissionListAccountListActivityUrl: `${BASE}/policy_tasks`,
  glRatingTabLocationUrl: `${BASE}/policy_general_liability`,
  glRatingTabPolicyInputsUrl: `${BASE}/gl/master_policies`,
  glRatingTabUnderwritingReviewUrl: `${BASE}/gl/under_writing`,
  glRatingTabRatingUrl: `${BASE}/gl/rating_screen`,
};
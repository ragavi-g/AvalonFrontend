// import type { SubmissionListResponse } from '../interface/submission-list.interface';

// /** Dummy API-style payload for the Submission List screen (55 accounts). */
// export const SUBMISSION_LIST_RESPONSE: SubmissionListResponse = {
//   account_list: [
//     {
//       account_name: "Cancel chosen bound-add on",
//       account_id: "R26-27",
//       entities_count: 4,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "General liability was added to the account and all four entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Closure request logged while bound add-on cancellation is under review."
//         }
//       ]
//     },
//     {
//       account_name: "Retrive policy",
//       account_id: "R26-27",
//       entities_count: 2,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "bind policy endr-GL add on-20260518-001",
//       account_id: "R26-27",
//       entities_count: 6,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Policy reissue - batch 4 (2025)",
//       account_id: "R26-27",
//       entities_count: 4,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Coverage extension - batch 5 (2026)",
//       account_id: "R26-27",
//       entities_count: 5,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Audit adjustment - batch 6 (2024)",
//       account_id: "R26-27",
//       entities_count: 6,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Premium correction - batch 7 (2025)",
//       account_id: "R26-27",
//       entities_count: 7,
//       gl_status: "Create Indication",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         }
//       ]
//     },
//     {
//       account_name: "Entity add-on - batch 8 (2026)",
//       account_id: "R26-27",
//       entities_count: 8,
//       gl_status: "Indication created",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         }
//       ]
//     },
//     {
//       account_name: "Loss run update - batch 9 (2024)",
//       account_id: "R26-27",
//       entities_count: 9,
//       gl_status: "Submit for approval",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         }
//       ]
//     },
//     {
//       account_name: "Indication change - batch 10 (2025)",
//       account_id: "R26-27",
//       entities_count: 10,
//       gl_status: "Submission approved",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         },
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Submission Approved / GL",
//           activity_note: "Submission was approved and bound for the account term."
//         }
//       ]
//     },
//     {
//       account_name: "Bound policy review - batch 11 (2026)",
//       account_id: "R26-27",
//       entities_count: 11,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Submission rework - batch 12 (2024)",
//       account_id: "R26-27",
//       entities_count: 12,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Renewal quote - batch 13 (2025)",
//       account_id: "R26-27",
//       entities_count: 1,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "New business submission - batch 14 (2026)",
//       account_id: "R26-27",
//       entities_count: 2,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Endorsement request - batch 15 (2024)",
//       account_id: "R26-27",
//       entities_count: 3,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Policy reissue - batch 16 (2025)",
//       account_id: "R26-27",
//       entities_count: 4,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Coverage extension - batch 17 (2026)",
//       account_id: "R26-27",
//       entities_count: 5,
//       gl_status: "Create Indication",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         }
//       ]
//     },
//     {
//       account_name: "Audit adjustment - batch 18 (2024)",
//       account_id: "R26-27",
//       entities_count: 6,
//       gl_status: "Indication created",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         }
//       ]
//     },
//     {
//       account_name: "Premium correction - batch 19 (2025)",
//       account_id: "R26-27",
//       entities_count: 7,
//       gl_status: "Submit for approval",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         }
//       ]
//     },
//     {
//       account_name: "Entity add-on - batch 20 (2026)",
//       account_id: "R26-27",
//       entities_count: 8,
//       gl_status: "Submission approved",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         },
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Submission Approved / GL",
//           activity_note: "Submission was approved and bound for the account term."
//         }
//       ]
//     },
//     {
//       account_name: "Loss run update - batch 21 (2024)",
//       account_id: "R26-27",
//       entities_count: 9,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Indication change - batch 22 (2025)",
//       account_id: "R26-27",
//       entities_count: 10,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Bound policy review - batch 23 (2026)",
//       account_id: "R26-27",
//       entities_count: 11,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Submission rework - batch 24 (2024)",
//       account_id: "R26-27",
//       entities_count: 12,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Renewal quote - batch 25 (2025)",
//       account_id: "R26-27",
//       entities_count: 1,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "New business submission - batch 26 (2026)",
//       account_id: "R26-27",
//       entities_count: 2,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Endorsement request - batch 27 (2024)",
//       account_id: "R26-27",
//       entities_count: 3,
//       gl_status: "Create Indication",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         }
//       ]
//     },
//     {
//       account_name: "Policy reissue - batch 28 (2025)",
//       account_id: "R26-27",
//       entities_count: 4,
//       gl_status: "Indication created",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         }
//       ]
//     },
//     {
//       account_name: "Coverage extension - batch 29 (2026)",
//       account_id: "R26-27",
//       entities_count: 5,
//       gl_status: "Submit for approval",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         }
//       ]
//     },
//     {
//       account_name: "Audit adjustment - batch 30 (2024)",
//       account_id: "R26-27",
//       entities_count: 6,
//       gl_status: "Submission approved",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         },
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Submission Approved / GL",
//           activity_note: "Submission was approved and bound for the account term."
//         }
//       ]
//     },
//     {
//       account_name: "Premium correction - batch 31 (2025)",
//       account_id: "R26-27",
//       entities_count: 7,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Entity add-on - batch 32 (2026)",
//       account_id: "R26-27",
//       entities_count: 8,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Loss run update - batch 33 (2024)",
//       account_id: "R26-27",
//       entities_count: 9,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Indication change - batch 34 (2025)",
//       account_id: "R26-27",
//       entities_count: 10,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Bound policy review - batch 35 (2026)",
//       account_id: "R26-27",
//       entities_count: 11,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Submission rework - batch 36 (2024)",
//       account_id: "R26-27",
//       entities_count: 12,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Renewal quote - batch 37 (2025)",
//       account_id: "R26-27",
//       entities_count: 1,
//       gl_status: "Create Indication",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         }
//       ]
//     },
//     {
//       account_name: "New business submission - batch 38 (2026)",
//       account_id: "R26-27",
//       entities_count: 2,
//       gl_status: "Indication created",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         }
//       ]
//     },
//     {
//       account_name: "Endorsement request - batch 39 (2024)",
//       account_id: "R26-27",
//       entities_count: 3,
//       gl_status: "Submit for approval",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         }
//       ]
//     },
//     {
//       account_name: "Policy reissue - batch 40 (2025)",
//       account_id: "R26-27",
//       entities_count: 4,
//       gl_status: "Submission approved",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         },
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Submission Approved / GL",
//           activity_note: "Submission was approved and bound for the account term."
//         }
//       ]
//     },
//     {
//       account_name: "Coverage extension - batch 41 (2026)",
//       account_id: "R26-27",
//       entities_count: 5,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Audit adjustment - batch 42 (2024)",
//       account_id: "R26-27",
//       entities_count: 6,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Premium correction - batch 43 (2025)",
//       account_id: "R26-27",
//       entities_count: 7,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Entity add-on - batch 44 (2026)",
//       account_id: "R26-27",
//       entities_count: 8,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Loss run update - batch 45 (2024)",
//       account_id: "R26-27",
//       entities_count: 9,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Indication change - batch 46 (2025)",
//       account_id: "R26-27",
//       entities_count: 10,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Bound policy review - batch 47 (2026)",
//       account_id: "R26-27",
//       entities_count: 11,
//       gl_status: "Create Indication",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         }
//       ]
//     },
//     {
//       account_name: "Submission rework - batch 48 (2024)",
//       account_id: "R26-27",
//       entities_count: 12,
//       gl_status: "Indication created",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         }
//       ]
//     },
//     {
//       account_name: "Renewal quote - batch 49 (2025)",
//       account_id: "R26-27",
//       entities_count: 1,
//       gl_status: "Submit for approval",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Priya Nair",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         },
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         }
//       ]
//     },
//     {
//       account_name: "New business submission - batch 50 (2026)",
//       account_id: "R26-27",
//       entities_count: 2,
//       gl_status: "Submission approved",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Subalaxmi",
//           activity_added_date: "May 17, 2026 4:15 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         },
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Create Indication / GL",
//           activity_note: "Indication workflow was started for the selected coverages."
//         },
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Indication created / GL",
//           activity_note: "Indication was created and is ready for underwriting review."
//         },
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Submit for Approval / GL",
//           activity_note: "Submission package was sent for approval."
//         },
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Submission Approved / GL",
//           activity_note: "Submission was approved and bound for the account term."
//         }
//       ]
//     },
//     {
//       account_name: "Endorsement request - batch 51 (2024)",
//       account_id: "R26-27",
//       entities_count: 3,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: true,
//       activity_list: [
//         {
//           activity_added_by: "Ranjitha Chakali",
//           activity_added_date: "May 16, 2026 2:44 PM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Policy reissue - batch 52 (2025)",
//       account_id: "R26-27",
//       entities_count: 4,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Brian Lee",
//           activity_added_date: "May 15, 2026 11:20 AM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Coverage extension - batch 53 (2026)",
//       account_id: "R26-27",
//       entities_count: 5,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Maria Santos",
//           activity_added_date: "April 22, 2026 8:05 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     },
//     {
//       account_name: "Audit adjustment - batch 54 (2024)",
//       account_id: "R26-27",
//       entities_count: 6,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "James Porter",
//           activity_added_date: "April 10, 2026 3:18 PM",
//           activity_name: "Add GL to Existing Account",
//           activity_note: "General liability was added to the account and entities were synchronized with the master policy."
//         }
//       ]
//     },
//     {
//       account_name: "Premium correction - batch 55 (2025)",
//       account_id: "R26-27",
//       entities_count: 7,
//       gl_status: "Review",
//       property_status: "Review",
//       is_gl_record: false,
//       activity_list: [
//         {
//           activity_added_by: "Alex Chen",
//           activity_added_date: "May 18, 2026 1:02 AM",
//           activity_name: "Create New Account",
//           activity_note: "New account was created and initial entity structure was established."
//         }
//       ]
//     }
//   ]
// };

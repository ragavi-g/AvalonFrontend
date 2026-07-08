// import type {
//   UnderwritingReview,
//   UnderwritingReviewResponse,
// } from '../../../core/interface/underwriting-review.interface';

// const ENTITY_NAMES = [
//   'Duisberg Lindskog Family',
//   'Canesdre Holdings LLC',
//   'Arizona Lakeside Partners',
//   'Calis Rockview Estates',
//   'Maple Grove Residences',
//   'Northgate Apartment Group',
//   'Summit Creek Properties',
//   'Harborview Living Trust',
//   'Oakwood Family Ventures',
//   'Riverside Commons LLC',
//   'Pinecrest Manor Group',
//   'Westfield Habitational',
//   'Birchwood Terrace Owners',
//   'Cedar Point Apartments',
//   'Lakeview Shores LP',
//   'Highland Park Residences',
//   'Stonebridge Family Trust',
//   'Meadowbrook Holdings',
//   'Clearwater Estates',
//   'Brookhaven Village LLC',
//   'Silver Oak Properties',
//   'Greenfield Commons',
//   'Sunridge Apartment Co',
//   'Valley View Residences',
//   'Timberline Family Group',
//   'Crossroads Living LLC',
//   'Fairview Manor Trust',
//   'Elm Street Properties',
//   'Parkside Habitational',
//   'Willow Creek Estates',
//   'Grandview Apartment LP',
//   'Southgate Family Holdings',
//   'Eastbrook Residences',
//   'Northstar Living Group',
//   'Blue Ridge Properties',
//   'Heritage Oaks LLC',
//   'Crown Point Estates',
//   'Mill Creek Apartments',
//   'Redwood Terrace Group',
//   'Aspen Grove Residences',
// ];

// const LOCATIONS = [
//   { zip: '55311', county: 'Hennepin' },
//   { zip: '55408', county: 'Hennepin' },
//   { zip: '85004', county: 'Maricopa' },
//   { zip: '85009', county: 'Maricopa' },
//   { zip: '85003', county: 'Maricopa' },
//   { zip: '85251', county: 'Maricopa' },
//   { zip: '78741', county: 'Travis' },
//   { zip: '78701', county: 'Travis' },
//   { zip: '33137', county: 'Miami-Dade' },
//   { zip: '33125', county: 'Miami-Dade' },
//   { zip: '30309', county: 'Fulton' },
//   { zip: '30342', county: 'Fulton' },
//   { zip: '80214', county: 'Jefferson' },
//   { zip: '80202', county: 'Denver' },
//   { zip: '84101', county: 'Salt Lake' },
//   { zip: '84115', county: 'Salt Lake' },
//   { zip: '19103', county: 'Philadelphia' },
//   { zip: '19131', county: 'Philadelphia' },
//   { zip: '60601', county: 'Cook' },
//   { zip: '60640', county: 'Cook' },
//   { zip: '02199', county: 'Suffolk' },
//   { zip: '02446', county: 'Norfolk' },
//   { zip: '98122', county: 'King' },
//   { zip: '98109', county: 'King' },
//   { zip: '97205', county: 'Multnomah' },
//   { zip: '97232', county: 'Multnomah' },
//   { zip: '77002', county: 'Harris' },
//   { zip: '77042', county: 'Harris' },
//   { zip: '28202', county: 'Mecklenburg' },
//   { zip: '28217', county: 'Mecklenburg' },
//   { zip: '37203', county: 'Davidson' },
//   { zip: '37205', county: 'Davidson' },
//   { zip: '48201', county: 'Wayne' },
//   { zip: '48214', county: 'Wayne' },
//   { zip: '77002', county: 'Harris' },
//   { zip: '80202', county: 'Denver' },
//   { zip: '94105', county: 'San Francisco' },
//   { zip: '94612', county: 'Alameda' },
//   { zip: '89109', county: 'Clark' },
//   { zip: '89146', county: 'Clark' },
// ];

// const PRIMARY_CLASS_CODES = ['60010', '61235', '61231', '61230'];
// const SECONDARY_CLASS_CODES = ['61226', '61235', '61231', '61230'];
// const TERTIARY_CLASS_CODES = ['60013', '60010', '61226', '60013'];

// function buildUnderwritingReview(index: number): UnderwritingReview {
//   const location = LOCATIONS[index - 1];
//   const isTemplateRow = index === 1;
//   const codeOffset = index % 4;

//   return {
//     account_loc_id: index,
//     submission_loc_id: `${index}.1`,
//     primary_class_code: PRIMARY_CLASS_CODES[codeOffset],
//     secondary_class_code: SECONDARY_CLASS_CODES[codeOffset],
//     tertiary_class_code: TERTIARY_CLASS_CODES[codeOffset],
//     effective_date: '7/21/2025',
//     expiration_date: '5/30/2026',
//     entity: ENTITY_NAMES[index - 1],
//     zip: location.zip,
//     county: location.county,
//     five_year_loss_total: index % 7 === 0 ? 15000 : 0,
//     fein_tin: '',
//     bvd_id: '',
//     fire_alarm: isTemplateRow ? 'Central' : index % 3 === 0 ? 'Local' : 'Central',
//     common_areas_adequate_lighting: 'Yes',
//     driveways_parking_common_areas_good_condition: 'Yes',
//     emergency_exit_signs: 'Yes',
//     formal_safety_disaster_plan: 'Yes',
//     formal_employee_training_program: 'Yes',
//     formal_maintenance_safety_work_order_tracking: 'Yes',
//     safety_equipment_under_10_years: 'Yes',
//     pets_pet_restrictions: isTemplateRow ? 'No Pets' : index % 6 === 0 ? 'Cats Only' : 'No Pets',
//     security_cameras_coverage: 'Yes',
//     smoke_detectors_all_units: 'Yes',
//     walkways_sidewalks_hallways_good_condition: 'Yes',
//     irpm_location_inside_notes: isTemplateRow
//       ? 'No pets allowed. 5% Credit'
//       : index % 2 === 0
//         ? 'Interior common areas well maintained. 3% Credit'
//         : 'No pets allowed. 5% Credit',
//     irpm_location_outside_notes: isTemplateRow
//       ? 'Driveway has uneven cracks. 2% debit.'
//       : index % 3 === 0
//         ? 'Parking lot resurfaced recently. 2% Credit'
//         : 'Driveway has uneven cracks. 2% debit.',
//     irpm_premises_notes: isTemplateRow
//       ? 'Premises reguarly maintained. 2% Credit'
//       : 'Premises regularly maintained. 2% Credit',
//     irpm_equipment_notes: isTemplateRow
//       ? 'Central monitered fire alarm and hard wired smoke detectors. 10% credit'
//       : 'Central monitored fire alarm and hard wired smoke detectors. 10% credit',
//     irpm_classification_notes: isTemplateRow
//       ? 'Immediate fire frequency score 80, location fire score 90. 5% debit.'
//       : `Fire frequency score ${70 + (index % 15)}, location fire score ${80 + (index % 10)}. 5% debit.`,
//     irpm_employees_notes: 'No credit or debit applied.',
//     irpm_cooperation_notes: isTemplateRow
//       ? 'Insured has comprehensive maintenance and safety programs and logs. 10% credit.'
//       : 'Insured has comprehensive maintenance and safety programs and logs. 10% credit.',
//     irpm_location_inside_debit_credit_pct: isTemplateRow ? -0.05 : index % 2 === 0 ? -0.03 : -0.05,
//     irpm_location_outside_debit_credit_pct: isTemplateRow ? 0.02 : index % 3 === 0 ? -0.02 : 0.02,
//     irpm_location_combined_debit_credit_pct: isTemplateRow ? -0.03 : index % 2 === 0 ? -0.05 : -0.03,
//     irpm_premises_debit_credit_pct: isTemplateRow ? -0.02 : -0.02,
//     irpm_equipment_debit_credit_pct: isTemplateRow ? -0.1 : -0.1,
//     irpm_classification_debit_credit_pct: isTemplateRow ? 0.05 : 0.05,
//     irpm_employees_debit_credit_pct: 0,
//     irpm_cooperation_debit_credit_pct: isTemplateRow ? -0.15 : -0.15,
//     final_irpm_credit_debit_pct: isTemplateRow ? -0.25 : -0.2 - (index % 5) * 0.01,
//     tier_building_age_notes: isTemplateRow ? 'Preferred' : index % 3 === 0 ? 'Standard' : 'Preferred',
//     tier_premises_safety_notes: isTemplateRow ? 'Standard' : 'Standard',
//     tier_location_notes: isTemplateRow ? 'Substandard' : index % 4 === 0 ? 'Standard' : 'Substandard',
//     tier_factor: 1,
//     location_description: '',
//     location_address: '',
//   };
// }

// /** Dummy API-style payload for the GL Rating Underwriting Review table (40 records). */
// export const UNDERWRITING_REVIEW_RESPONSE: UnderwritingReviewResponse = {
//   underwriting_review_list: Array.from({ length: 40 }, (_, i) =>
//     buildUnderwritingReview(i + 1),
//   ),
// };

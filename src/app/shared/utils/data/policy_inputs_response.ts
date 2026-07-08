import type {
  PolicyInput,
  PolicyInputsResponse,
} from '../../../core/interface/policy-inputs.interface';

const ENTITY_NAMES = [
  'Duisberg Lindskog Family',
  'Canesdre Holdings LLC',
  'Arizona Lakeside Partners',
  'Calis Rockview Estates',
  'Maple Grove Residences',
  'Northgate Apartment Group',
  'Summit Creek Properties',
  'Harborview Living Trust',
  'Oakwood Family Ventures',
  'Riverside Commons LLC',
  'Pinecrest Manor Group',
  'Westfield Habitational',
  'Birchwood Terrace Owners',
  'Cedar Point Apartments',
  'Lakeview Shores LP',
  'Highland Park Residences',
  'Stonebridge Family Trust',
  'Meadowbrook Holdings',
  'Clearwater Estates',
  'Brookhaven Village LLC',
  'Silver Oak Properties',
  'Greenfield Commons',
  'Sunridge Apartment Co',
  'Valley View Residences',
  'Timberline Family Group',
  'Crossroads Living LLC',
  'Fairview Manor Trust',
  'Elm Street Properties',
  'Parkside Habitational',
  'Willow Creek Estates',
  'Grandview Apartment LP',
  'Southgate Family Holdings',
  'Eastbrook Residences',
  'Northstar Living Group',
  'Blue Ridge Properties',
  'Heritage Oaks LLC',
  'Crown Point Estates',
  'Mill Creek Apartments',
  'Redwood Terrace Group',
  'Aspen Grove Residences',
];

const LOCATIONS = [
  { address: '79 Woodland Ave', city: 'Maple Grove', state: 'MN', zip_code: '55311', county: 'Hennepin' },
  { address: '1420 Lakeview Dr', city: 'Minneapolis', state: 'MN', zip_code: '55408', county: 'Hennepin' },
  { address: '2200 N Central Ave', city: 'Phoenix', state: 'AZ', zip_code: '85004', county: 'Maricopa' },
  { address: '4751 W Oak St', city: 'Phoenix', state: 'AZ', zip_code: '85009', county: 'Maricopa' },
  { address: '101 N 1st Ave', city: 'Phoenix', state: 'AZ', zip_code: '85003', county: 'Maricopa' },
  { address: '3300 N Scottsdale Rd', city: 'Scottsdale', state: 'AZ', zip_code: '85251', county: 'Maricopa' },
  { address: '890 Riverside Pkwy', city: 'Austin', state: 'TX', zip_code: '78741', county: 'Travis' },
  { address: '1560 Congress Ave', city: 'Austin', state: 'TX', zip_code: '78701', county: 'Travis' },
  { address: '4100 Biscayne Blvd', city: 'Miami', state: 'FL', zip_code: '33137', county: 'Miami-Dade' },
  { address: '2750 NW 5th St', city: 'Miami', state: 'FL', zip_code: '33125', county: 'Miami-Dade' },
  { address: '1200 Peachtree St NE', city: 'Atlanta', state: 'GA', zip_code: '30309', county: 'Fulton' },
  { address: '4550 Roswell Rd', city: 'Atlanta', state: 'GA', zip_code: '30342', county: 'Fulton' },
  { address: '7800 W Colfax Ave', city: 'Lakewood', state: 'CO', zip_code: '80214', county: 'Jefferson' },
  { address: '1901 Wazee St', city: 'Denver', state: 'CO', zip_code: '80202', county: 'Denver' },
  { address: '500 S Main St', city: 'Salt Lake City', state: 'UT', zip_code: '84101', county: 'Salt Lake' },
  { address: '2100 S State St', city: 'Salt Lake City', state: 'UT', zip_code: '84115', county: 'Salt Lake' },
  { address: '1600 Market St', city: 'Philadelphia', state: 'PA', zip_code: '19103', county: 'Philadelphia' },
  { address: '4500 City Ave', city: 'Philadelphia', state: 'PA', zip_code: '19131', county: 'Philadelphia' },
  { address: '300 N Michigan Ave', city: 'Chicago', state: 'IL', zip_code: '60601', county: 'Cook' },
  { address: '5400 N Sheridan Rd', city: 'Chicago', state: 'IL', zip_code: '60640', county: 'Cook' },
  { address: '800 Boylston St', city: 'Boston', state: 'MA', zip_code: '02199', county: 'Suffolk' },
  { address: '1250 Beacon St', city: 'Brookline', state: 'MA', zip_code: '02446', county: 'Norfolk' },
  { address: '901 E Pike St', city: 'Seattle', state: 'WA', zip_code: '98122', county: 'King' },
  { address: '400 Broad St', city: 'Seattle', state: 'WA', zip_code: '98109', county: 'King' },
  { address: '1500 SW Morrison St', city: 'Portland', state: 'OR', zip_code: '97205', county: 'Multnomah' },
  { address: '3200 NE Sandy Blvd', city: 'Portland', state: 'OR', zip_code: '97232', county: 'Multnomah' },
  { address: '600 Travis St', city: 'Houston', state: 'TX', zip_code: '77002', county: 'Harris' },
  { address: '9800 Richmond Ave', city: 'Houston', state: 'TX', zip_code: '77042', county: 'Harris' },
  { address: '200 S Tryon St', city: 'Charlotte', state: 'NC', zip_code: '28202', county: 'Mecklenburg' },
  { address: '5100 South Blvd', city: 'Charlotte', state: 'NC', zip_code: '28217', county: 'Mecklenburg' },
  { address: '1000 Broadway', city: 'Nashville', state: 'TN', zip_code: '37203', county: 'Davidson' },
  { address: '4500 Harding Pike', city: 'Nashville', state: 'TN', zip_code: '37205', county: 'Davidson' },
  { address: '2500 Woodward Ave', city: 'Detroit', state: 'MI', zip_code: '48201', county: 'Wayne' },
  { address: '8800 E Jefferson Ave', city: 'Detroit', state: 'MI', zip_code: '48214', county: 'Wayne' },
  { address: '700 Louisiana St', city: 'Houston', state: 'TX', zip_code: '77002', county: 'Harris' },
  { address: '1801 California St', city: 'Denver', state: 'CO', zip_code: '80202', county: 'Denver' },
  { address: '50 Fremont St', city: 'San Francisco', state: 'CA', zip_code: '94105', county: 'San Francisco' },
  { address: '1999 Harrison St', city: 'Oakland', state: 'CA', zip_code: '94612', county: 'Alameda' },
  { address: '3500 Las Vegas Blvd S', city: 'Las Vegas', state: 'NV', zip_code: '89109', county: 'Clark' },
  { address: '6400 W Charleston Blvd', city: 'Las Vegas', state: 'NV', zip_code: '89146', county: 'Clark' },
];

function formatQuoteId(index: number): string {
  return `QGL${String(index).padStart(6, '0')}-25`;
}

function formatProRateFactor(index: number): string {
  const value = 0.82 + (index % 14) * 0.01;
  return value.toFixed(3);
}

function buildPolicyInput(index: number): PolicyInput {
  const location = LOCATIONS[index - 1];
  const isTemplateRow = index === 1;
  const habUnits = isTemplateRow ? 50 : 40 + (index % 11) * 5;
  const commercialSqft = isTemplateRow ? 20000 : 15000 + (index % 8) * 2500;
  const habitationalSqft = isTemplateRow ? 7000 : 5000 + (index % 6) * 1000;
  const parkingSqft = isTemplateRow ? 2000 : 1500 + (index % 5) * 500;

  return {
    quote_id: formatQuoteId(index),
    policy_id: '',
    account_loc_id: index,
    rating_period: 'R26-27',
    policy_status: 'Submitted',
    policy_type: '',
    effective_date: '7/21/2025',
    expiration_date: '5/30/2026',
    pro_rate_factor: isTemplateRow ? '0.858' : formatProRateFactor(index),
    entity_name: ENTITY_NAMES[index - 1],
    address: location.address,
    city: location.city,
    state: location.state,
    zip_code: location.zip_code,
    county: location.county,
    original_year_built: isTemplateRow ? 1988 : 1975 + (index % 30),
    construction_description: isTemplateRow
      ? 'ISO 1 - Frame'
      : index % 3 === 0
        ? 'ISO 2 - Joisted Masonry'
        : 'ISO 1 - Frame',
    sprinklered: isTemplateRow ? 'Yes' : index % 5 === 0 ? 'Yes - 80%' : 'Yes',
    type_of_wiring: isTemplateRow
      ? '1 - Copper'
      : index % 4 === 0
        ? '3 - Protected Aluminum'
        : '1 - Copper',
    num_pools: isTemplateRow ? 2 : index % 3 === 0 ? 1 : 2,
    num_playgrounds: isTemplateRow ? 1 : index % 2 === 0 ? 2 : 1,
    num_courts_gyms_other: isTemplateRow ? 2 : 1 + (index % 3),
    pct_occupied: isTemplateRow ? 100 : 90 + (index % 11),
    pct_subsidized: '',
    pct_student: '',
    pct_assisted_living: '',
    property_type: 'Habitational',
    occupancy_details: isTemplateRow ? 'General' : index % 2 === 0 ? 'General' : 'Senior Living',
    num_buildings: isTemplateRow ? 7 : 5 + (index % 8),
    num_stories: isTemplateRow ? 2 : index % 4 === 0 ? 3 : 2,
    num_hab_units: habUnits,
    commercial_sqft: commercialSqft,
    habitational_sqft: habitationalSqft,
    parking_sqft: parkingSqft,
    total_sqft: commercialSqft + habitationalSqft + parkingSqft,
    fein_tin: '',
    bvd_id: '',
    location_description: '',
    location_address: '',
    occ_agg_limit: '1M/3M',
    deductible: 5000,
    primary_operation: 'Apartment Buildings',
    gl_class_code_primary: '60010',
    gl_primary_exposure_basis: 'Each Unit',
    gl_primary_exposure: isTemplateRow ? 50 : habUnits,
    gl_secondary_class_code_rating: 'Yes',
    gl_secondary_operation: 'Building',
    gl_secondary_class_code: '61226',
    gl_secondary_exposure_basis: 'Area - each1,000 square feet of area',
    gl_secondary_exposure: isTemplateRow ? 20 : 15 + (index % 10),
    gl_tertiary_class_code_rating: 'Yes',
    gl_tertiary_operation: 'Apartment Building',
    gl_tertiary_class_code: '60013',
    gl_tertiary_exposure_basis: 'Each Unit',
    gl_tertiary_exposure: isTemplateRow ? 20 : 15 + (index % 8),
    primary_parking_type: 'Parking – public – not open air',
    primary_parking_class_code: '46603',
    primary_parking_exposure_basis: 'Gross Sales – per $1,000 gross sales',
    primary_parking_exposure: isTemplateRow ? 200 : 150 + (index % 6) * 25,
    secondary_parking_type:
      'Parking – public – shopping centers – maintained by the insured (lessor\'s risk only)',
    secondary_parking_class_code: '46607',
    secondary_parking_exposure_basis: 'Area – each 1,000 square feet of area',
    secondary_parking_exposure: isTemplateRow ? 100 : 80 + (index % 5) * 10,
    tertiary_parking_type: 'Parking – public – open air',
    tertiary_parking_class_code: '46604',
    tertiary_parking_exposure_basis: 'Gross Sales – per $1,000 gross sales',
    tertiary_parking_exposure: isTemplateRow ? 100 : 80 + (index % 4) * 20,
    waiver_of_subrogation: 'Yes',
    primary_and_noncontributory: 'Yes',
    blanket_additional_insured: 'Yes',
    hired_and_nonowned_auto: 'Yes',
    assault_and_battery_sub_limit: '500000',
    habitation_sub_limit: '$500,000',
    fire_alarm: isTemplateRow ? 'Central' : index % 3 === 0 ? 'Local' : 'Central',
    common_areas_adequate_lighting: 'Yes',
    driveways_parking_common_areas_good_condition: 'Yes',
    emergency_exit_signs: 'Yes',
    formal_safety_disaster_plan: 'Yes',
    formal_employee_training_program: 'Yes',
    formal_maintenance_safety_work_order_tracking: 'Yes',
    safety_equipment_under_10_years: 'Yes',
    pets_pet_restrictions: isTemplateRow ? 'No Pets' : index % 6 === 0 ? 'Cats Only' : 'No Pets',
    security_cameras_coverage:
      'Yes',
    smoke_detectors_all_units: 'Yes',
    walkways_sidewalks_hallways_good_condition: 'Yes',
  };
}

/** Dummy API-style payload for the GL Rating Policy Inputs table (40 records). */
export const POLICY_INPUTS_RESPONSE: PolicyInputsResponse = {
  policy_inputs_list: Array.from({ length: 40 }, (_, i) => buildPolicyInput(i + 1)),
};

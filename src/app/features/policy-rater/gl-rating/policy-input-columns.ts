import type { PolicyInput } from '../../../core/interface/policy-inputs.interface';

export type PolicyInputColumnType = 'text' | 'badge' | 'status';
export type PolicyInputValueFormat =
  | 'text'
  | 'date'
  | 'boolean'
  | 'percent'
  | 'percentString'
  | 'number'
  | 'nullableNumber';

export interface PolicyInputColumn {
  key: keyof PolicyInput;
  label: string;
  type?: PolicyInputColumnType;
  apiKey?: string;
  format?: PolicyInputValueFormat;
}

export const POLICY_INPUT_TABLE_COLUMNS: PolicyInputColumn[] = [
  { key: 'quote_id', label: 'Quote ID', apiKey: 'QuoteID' },
  { key: 'policy_id', label: 'Policy ID', apiKey: 'PolicyID' },
  { key: 'account_loc_id', label: 'AccountLocID', apiKey: 'Accountlocid', format: 'number' },
  { key: 'policy_status', label: 'Policy Status', type: 'status', apiKey: 'PolicyStatus' },
  { key: 'policy_type', label: 'Policy Type', apiKey: 'PolicyType' },
  { key: 'effective_date', label: 'Effective Date', apiKey: 'PlanEffectiveDate', format: 'date' },
  { key: 'expiration_date', label: 'Expiration Date', apiKey: 'PlanExpirationDate', format: 'date' },
  { key: 'pro_rate_factor', label: 'ProRate Factor', apiKey: 'ProRateFactor' },
  { key: 'entity_name', label: 'Entity Name', apiKey: 'EntityName' },
  { key: 'address', label: 'Address', apiKey: 'MainAddress' },
  { key: 'city', label: 'City', apiKey: 'City' },
  { key: 'state', label: 'State', apiKey: 'StateCode' },
  { key: 'zip_code', label: '5 digit ZIP Code', apiKey: 'ZipCode' },
  { key: 'county', label: 'County', apiKey: 'County' },
  { key: 'original_year_built', label: 'Original Year Built', apiKey: 'OrigBuildYear', format: 'number' },
  { key: 'construction_description', label: 'Construction Description', apiKey: 'ConstructionISO' },
  { key: 'sprinklered', label: 'Sprinklered (Y|N incl %)', apiKey: 'SprinklerText' },
  { key: 'type_of_wiring', label: 'Type of wiring (alum, cop, prot alum.)', apiKey: 'WiringType' },
  { key: 'num_pools', label: '# of Pools', apiKey: 'Pools', format: 'number' },
  { key: 'num_playgrounds', label: '# of Playgrounds', apiKey: 'Playgrounds', format: 'number' },
  { key: 'num_courts_gyms_other', label: '# of Courts|Gyms|Other', apiKey: 'CourtsGyms', format: 'number' },
  { key: 'pct_occupied', label: '% Occupied', apiKey: 'PercOccupied', format: 'percent' },
  { key: 'pct_subsidized', label: '% Subsidized', apiKey: 'PercSubsidized', format: 'percentString' },
  { key: 'pct_student', label: '% Student', apiKey: 'PercStudent', format: 'percentString' },
  { key: 'pct_assisted_living', label: '% Assisted Living', apiKey: 'PercAssistedLiving', format: 'percentString' },
  { key: 'property_type', label: 'Property Type', apiKey: 'PropertyType' },
  { key: 'occupancy_details', label: 'Occupancy Details', apiKey: 'OccupancyNotes' },
  { key: 'num_buildings', label: '# Buildings', apiKey: 'Buildings', format: 'number' },
  { key: 'num_stories', label: '# of Stories', apiKey: 'Stories', format: 'number' },
  { key: 'num_hab_units', label: '# Hab Units', apiKey: 'HabUnits', format: 'number' },
  { key: 'commercial_sqft', label: 'Commercial SqFt', apiKey: 'CommSqFt', format: 'number' },
  { key: 'habitational_sqft', label: 'Habitational SqFt', apiKey: 'HabSqFt', format: 'number' },
  { key: 'parking_sqft', label: 'Parking SqFt', apiKey: 'ParkingSqFt', format: 'number' },
  { key: 'total_sqft', label: 'TOTAL Sqft', apiKey: 'TotalSqFt', format: 'number' },
  { key: 'fein_tin', label: 'FEIN/TIN', apiKey: 'NationalID' },
  { key: 'bvd_id', label: 'BVD ID', apiKey: 'BvDIDNumber' },
  { key: 'location_description', label: 'Location Description/Apartment Name', apiKey: 'Location_Description' },
  { key: 'location_address', label: 'Location Address', apiKey: 'Location_Address' },
  { key: 'occ_agg_limit', label: 'OCC/AGG Limit', apiKey: 'OccuranceLimitAggregateLimit' },
  { key: 'deductible', label: 'Deductible', apiKey: 'Deductible', format: 'number' },
  { key: 'primary_operation', label: 'Primary Operation', apiKey: 'primary_operation' },
  { key: 'gl_class_code_primary', label: 'GL Class Code - Primary', apiKey: 'primary_classcode' },
  { key: 'gl_primary_exposure_basis', label: 'GL Primary Exposure Basis', apiKey: 'primary_exposurebasis' },
  { key: 'gl_primary_exposure', label: 'GL Primary Exposure', apiKey: 'primary_exposurevalue', format: 'nullableNumber' },
  {
    key: 'gl_secondary_class_code_rating',
    label: 'GL Secondary Class Code Rating?',
    apiKey: 'isGLSecondaryRatingRequired',
    format: 'boolean',
  },
  { key: 'gl_secondary_operation', label: 'Secondary Operation', apiKey: 'secondary_operation' },
  { key: 'gl_secondary_class_code', label: 'GL Secondary Class Code', apiKey: 'secondary_classcode' },
  { key: 'gl_secondary_exposure_basis', label: 'GL Secondary Exposure Basis', apiKey: 'secondary_exposurebasis' },
  { key: 'gl_secondary_exposure', label: 'GL Secondary Exposure', apiKey: 'secondary_exposurevalue', format: 'nullableNumber' },
  {
    key: 'gl_tertiary_class_code_rating',
    label: 'GL Tertiary Class Code Rating?',
    apiKey: 'isGLtertiaryRatingRequired',
    format: 'boolean',
  },
  { key: 'gl_tertiary_operation', label: 'GL Tertiary Operation', apiKey: 'tertiary_operation' },
  { key: 'gl_tertiary_class_code', label: 'GL Tertiary Class Code', apiKey: 'tertiary_classcode' },
  { key: 'gl_tertiary_exposure_basis', label: 'GL Tertiary Exposure Basis', apiKey: 'tertiary_exposurebasis' },
  { key: 'gl_tertiary_exposure', label: 'GL Tertiary Exposure', apiKey: 'tertiary_exposurevalue', format: 'nullableNumber' },
  { key: 'primary_parking_type', label: 'Primary Parking Type', apiKey: 'primary_parking_type' },
  { key: 'primary_parking_class_code', label: 'Primary Parking Class Code', apiKey: 'primary_parking_classcode' },
  { key: 'primary_parking_exposure_basis', label: 'Primary Parking Exposure Basis', apiKey: 'primary_parking_exposurebasis' },
  { key: 'primary_parking_exposure', label: 'Primary Parking Exposure', apiKey: 'primary_parking_exposure', format: 'nullableNumber' },
  { key: 'secondary_parking_type', label: 'Secondary Parking Type', apiKey: 'secondary_parking_type' },
  { key: 'secondary_parking_class_code', label: 'Secondary Parking Class Code', apiKey: 'secondary_parking_classcode' },
  { key: 'secondary_parking_exposure_basis', label: 'Secondary Parking Exposure Basis', apiKey: 'secondary_parking_exposurebasis' },
  { key: 'secondary_parking_exposure', label: 'Secondary Parking Exposure', apiKey: 'secondary_parking_exposure', format: 'nullableNumber' },
  { key: 'tertiary_parking_type', label: 'Tertiary Parking Type', apiKey: 'tertiary_parking_type' },
  { key: 'tertiary_parking_class_code', label: 'Tertiary Parking Class Code', apiKey: 'tertiary_parking_classcode' },
  { key: 'tertiary_parking_exposure_basis', label: 'Tertiary Parking Exposure Basis', apiKey: 'tertiary_parking_exposurebasis' },
  { key: 'tertiary_parking_exposure', label: 'Tertiary Parking Exposure', apiKey: 'tertiary_parking_exposure', format: 'nullableNumber' },
  { key: 'waiver_of_subrogation', label: 'Waiver of Subrogation?', apiKey: 'WaiverOfSubrogation', format: 'boolean' },
  { key: 'primary_and_noncontributory', label: 'Primary and Noncontributory?', apiKey: 'PrimaryAndNoncontributory', format: 'boolean' },
  { key: 'blanket_additional_insured', label: 'Blanket Additional Insured?', apiKey: 'BlanketAdditionalInsured', format: 'boolean' },
  { key: 'hired_and_nonowned_auto', label: 'Hired and Nonowned Auto?', apiKey: 'HiredAndNonownedAuto', format: 'boolean' },
  { key: 'assault_and_battery_sub_limit', label: 'Assault and Battery Sub-Limit?', apiKey: 'AssultAndBatterySubLimit' },
  { key: 'habitation_sub_limit', label: 'Habitation Sub-Limit?', apiKey: 'HabitationSubLimit' },
  { key: 'fire_alarm', label: 'Fire Alarm Central Monitored ot Local?', apiKey: 'FireAlarmCentralOrLocal' },
  {
    key: 'common_areas_adequate_lighting',
    label: 'Do all Common Areas have Adequate Lighting?',
    apiKey: 'CommonAreasAdequateLighting',
    format: 'boolean',
  },
  {
    key: 'driveways_parking_common_areas_good_condition',
    label: 'Driveways, Parking Areas and Common Areas in good condition?',
    apiKey: 'DrivewaysParkingCommonAreaInGoodCondition',
    format: 'boolean',
  },
  { key: 'emergency_exit_signs', label: 'Emergency Exit Signes?', apiKey: 'EmergencyExitSigns', format: 'boolean' },
  { key: 'formal_safety_disaster_plan', label: 'Formal Safety Disaster Plan?', apiKey: 'FormalSafetyDisasterPlan', format: 'boolean' },
  { key: 'formal_employee_training_program', label: 'Formal Employee Training Program?', apiKey: 'FormalEmployeeTrainingProgram', format: 'boolean' },
  {
    key: 'formal_maintenance_safety_work_order_tracking',
    label: 'Formal Maintenance Safety work order tracking system?',
    apiKey: 'FormalMaintenanceSafetyOrderTracking',
    format: 'boolean',
  },
  { key: 'safety_equipment_under_10_years', label: 'Safety Equipment under 10 years old?', apiKey: 'SafetyEquipmentUnder10Years', format: 'boolean' },
  { key: 'pets_pet_restrictions', label: 'Pets? Pet restrictions?', apiKey: 'PetRestrictionText' },
  {
    key: 'security_cameras_coverage',
    label:
      'Security Cameras cover all entrances, common areas, parking lots, pools, and or playgrounds?',
    apiKey: 'SecurityCamerasCoverage',
    format: 'boolean',
  },
  { key: 'smoke_detectors_all_units', label: 'Smoke Detectors in all Units/Buildings/Offices?', apiKey: 'SmokeDetectorsInAllUnits', format: 'boolean' },
  {
    key: 'walkways_sidewalks_hallways_good_condition',
    label: 'Walkways, Sidewalks and Hallways in good condition with proper lighting?',
    apiKey: 'Walkwayscondition',
    format: 'boolean',
  },
];

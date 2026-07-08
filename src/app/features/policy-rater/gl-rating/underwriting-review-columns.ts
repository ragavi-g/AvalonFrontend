import type { UnderwritingReview } from '../../../core/interface/underwriting-review.interface';

export interface UnderwritingReviewColumn {
  key: keyof UnderwritingReview;
  label: string;
}

export const UNDERWRITING_REVIEW_TABLE_COLUMNS: UnderwritingReviewColumn[] = [
  { key: 'AccountLocID', label: 'AccountLocID' },
  { key: 'SubmissionLocID', label: 'Submission Loc ID' },
  { key: 'primary_classcode', label: 'Primary Class Code' },
  { key: 'secondary_classcode', label: 'Secondary Class Code' },
  { key: 'tertiary_classcode', label: 'Tertiary Class Code' },
  { key: 'EffectiveDate', label: 'Effective Date' },
  { key: 'ExpirationDate', label: 'Expiration Date' },
  { key: 'EntityName', label: 'Entity' },
  { key: 'ZIP', label: 'ZIP' },
  { key: 'County', label: 'County' },
  { key: '5YearLossTotal', label: '5 Year Loss Total' },
  { key: 'NationalID', label: 'FEIN/TIN' },
  { key: 'BvDIDNumber', label: 'BVD ID' },
  { key: 'FireAlarmType', label: 'Fire Alarm Central Monitored or Local?' },
  { key: 'CommonAreasLighting', label: 'Do all Common Areas have Adequate Lighting?' },
  {
    key: 'Drivewayscondition',
    label: 'Driveways, Parking Areas and Common Areas in good condition?',
  },
  { key: 'EmergencyExitSignes', label: 'Emergency Exit Signes?' },
  { key: 'FormalSafetyDisasterPlan', label: 'Formal Safety Disaster Plan?' },
  { key: 'FormalEmployeeTrainingProgram', label: 'Formal Employee Training Program?' },
  {
    key: 'FormalMaintenancetracking',
    label: 'Formal Maintenance Safety work order tracking system?',
  },
  { key: 'SafetyEquipmentunder10yrs', label: 'Safety Equipment under 10 years old?' },
  { key: 'Petsrestrictions', label: 'Pets? Pet restrictions?' },
  {
    key: 'IsSecurityCamerasavailable',
    label:
      'Security Cameras cover all entrances, common areas, parking lots, pools, and or playgrounds?',
  },
  { key: 'IsSmokeDetectorsavailable', label: 'Smoke Detectors in all Units/Buildings/Offices?' },
  {
    key: 'Walkwayscondition',
    label: 'Walkways, Sidewalks and Hallways in good condition with proper lighting?',
  },
  { key: 'IRPMLocationInsideNotes', label: 'IRPM Location Inside Notes' },
  { key: 'IRPMLocationOutsideNotes', label: 'IRPM Location Outside Notes' },
  { key: 'IRPMPremisesNotes', label: 'IRPM Premises Notes' },
  { key: 'IRPMEquipmentNotes', label: 'IRPM Equipment Notes' },
  { key: 'IRPMClassificationNotes', label: 'IRPM Classification Notes' },
  { key: 'IRPMEmployeesNotes', label: 'IRPM Employees Notes' },
  { key: 'IRPMCooperationNotes', label: 'IRPM Cooperation Notes' },
  { key: 'IRPMLocationInsideDebitCredit', label: 'IRPM Location Inside Debit/Credit (%)' },
  {
    key: 'IRPMLocationOutsideDebitCredit',
    label: 'IRPM Location Outside Debit Credit (%)',
  },
  {
    key: 'IRPMLocationCombinedDebitCredit',
    label: 'IRPM Location Combined Debit/Credit (%)',
  },
  { key: 'IRPMPremisesDebitCredit', label: 'IRPM Premises Debit/Credit (%)' },
  { key: 'IRPMEquipmentDebitCredit', label: 'IRPM Equipment Debit/Credit (%)' },
  { key: 'IRPMClassificationDebitCredit', label: 'IRPM Classification Debit/Credit (%)' },
  { key: 'IRPMEmployeesDebitCredit', label: 'IRPM Employees Debit/Credit (%)' },
  { key: 'IRPMCooperationDebitCredit', label: 'IRPM Cooperation Debit/Credit (%)' },
  { key: 'FinalIRPMCreditDebit', label: 'Final IRPM Credit/Debit (%)' },
  { key: 'TierBuildingAgeNotes', label: 'Tier Building Age Notes' },
  { key: 'TierPremisesSafetyNotes', label: 'Tier Premises Safety Notes' },
  { key: 'TierLocationNotes', label: 'Tier Location Notes' },
  { key: 'TierFactor', label: 'Tier Factor' },
  { key: 'Location_Description', label: 'Location Description/Apartment Name' },
  { key: 'Location_Address', label: 'Location Address' },
];
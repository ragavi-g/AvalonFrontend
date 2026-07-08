export interface SubmissionActivity {
  policyTaskId?: string;
  taskId?: number;
  activity_added_by: string;
  activity_added_date: string;
  activity_name: string;
  activity_note: string;
}

export interface ActivityList {
  PolicyTaskID: string;
  AccountID: number;
  RatingPeriodID: number;
  TaskID: number;
  TaskOrd: number;
  TaskDate: string;
  TaskText: string;
  TaskNotes: string;
  ModDate: string;
  ModBy: string;
  CreateDate: string;
  TaggedAccountID: string | null;
}

export interface ActivityListResponse {
  isSuccess: boolean;
  responseMsg: string;
  data: ActivityList[];
  serverDateTime: number;
}

export type WorkflowStatus =
  | 'Review'
  | 'Create Indication'
  | 'Indication created'
  | 'submit for approval'
  | 'submission approved'
  | 'Submit for Approval'
  | 'Submission Approved';

export interface AccountList {
  AccountID: number;
  AccountName: string;
  MailAddress?: string | null;
  MailCity?: string | null;
  MailStateCode?: string | null;
  MailZipCode?: string | null;
  MasterPolicyQuoteID?: string;
  OrigQuoteID?: string;
  MasterPolicyID?: string | null;
  RatingPeriodID?: number;
  RatingPeriodName: string;
  PolicyID?: string | null;
  NationalID?: string | null;
  BvDIDNumber?: string | null;
  OrbisIDNumber?: string | null;
  ProbabilityOfDefaultPercent?: number | null;
  ImpliedRating?: string | null;
  ConservativeCreditLimitUSD?: number | null;
  BalancedCreditLimitUSD?: number | null;
  AggressiveCreditLimitUSD?: number | null;
  PaymentDelinquencyRiskScoreLastMonth?: number | null;
  PaymentDelinquencyRiskScoreLabelLastMonth?: string | null;
  PaymentRiskScoreValueLastMonth?: number | null;
  PaymentRiskScoreLabelLastMonth?: string | null;
  PaymentRiskSegmentLastMonth?: string | null;
  PaymentRiskLabelLastMonth?: string | null;
  LongTermHealthLabelLastMonth?: string | null;
  CreditRiskRatingCategoryLastMonth?: string | null;
  CreditRiskRatingLabelLastMonth?: string | null;
  NAICS2022PrimaryCode?: string | null;
  NAICS2022PrimaryCodeDescription?: string | null;
  GLPolicyStatusID?: number;
  GLPolicyStatus: string;
  PolicyStatusID?: number;
  PolicyStatus: string;
  PolicyType?: string;
  PolicyAdjustementFactor?: number;
  PolicyAdjustementFactorInput?: number;
  TargetAnnualPremium?: number;
  LossRunYears?: number;
  TotalLosses?: number;
  LossInspections?: number;
  LossInspectFeeEa?: number;
  DroneInspections?: number;
  DroneInspectFeeEa?: number;
  Entities: number;
  IsGLRecord: number;
  SuggestedInspections?: number;
  PolicyEffectiveDate?: string;
  PolicyExpirationDate?: string;
  PolicyCancelDate?: string | null;
  PolicyNotes?: string | null;
  MdDate?: string;
  ModBy?: string;
  StatusIcon?: string;
  RatingState?: string | null;
  RatingStateOverride?: boolean;
  vcBVSum?: number;
  vcCVSum?: number;
  vcRVSum?: number;
  vcTotalTIV?: number;
  vcTotalTIVAdjusted?: number;
  vcProRatedTIV?: number;
  vcPropertyPrem?: number;
  vcPropertyPremAdjusted?: number;
  vcPropertyFees?: number;
  vcPropertyPremAdjustedWithFees?: number;
  vcProratedPropertyPrem?: number;
  vcProratedPropertyFees?: number;
  vcProratedPropertyPremWithFees?: number;
  vcCNAEquipmentBreakdown?: number;
  vcMillerTerrorism?: number;
  vcArmFees?: number;
  vcFireMarshallTax?: number;
  vcInspectionFees?: number;
  vcAZSLT?: number;
  vcAZStampingFee?: number;
  vcProrateCNAEquipmentBreakdown?: number;
  vcProrateMillerTerrorism?: number;
  vcProrateArmsFees?: number;
  vcProrateFireMarshallTax?: number;
  vcProrateSLT?: number;
  vcProrateStampingFee?: number;
  BackupSewer?: number;
  ExtendedIndemnity?: number;
  OrdinanceBRate?: number;
  OrdinanceCRate?: number;
  RatingStartDate?: string;
  TaggedAccountID?: string | null;
  EquipBreakdownDeclined?: boolean;
  TriaDeclined?: boolean;
  ModDate?: string;
  SOVScreen?: boolean;
  SubmissionScreen?: boolean;
  QuoteScreen?: boolean;
  BindScreen?: boolean;
  BookScreen?: boolean;
  RatingScreen?: boolean;
  ClaimScreen?: boolean;
  IncFlood?: boolean;
}

export interface AccountListResponse {
  isSuccess: boolean;
  responseMsg: string;
  data: AccountList[];
  serverDateTime: number;
}

/** Legacy mock payload shape used by submission_list_response.ts. */
export interface SubmissionListResponse {
  account_list: Array<{
    account_name: string;
    account_id: string;
    entities_count: number;
    gl_status: string;
    property_status: string;
    is_gl_record: boolean;
    activity_list: SubmissionActivity[];
  }>;
}
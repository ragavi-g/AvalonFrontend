export interface PolicyGeneralLiability {
  AccountID: number;
  MasterPolicyQuoteID: string;
  RatingPeriodID: number;
  GeneralLiabilityID: string;
  EntityName: string;
  Address: string;
  City: string;
  State: string;
  ZIP: string;
  SearchName: string;
  SubmissionLocID: number;
  GLSchedulesId: string;
  EffectiveDate: string;
  ExpirationDate: string;
  ProRateFactor: number;
  SelectedVersion: boolean;
}

export interface PolicyGeneralLiabilityResponse {
  isSuccess: boolean;
  responseMsg: string;
  data: PolicyGeneralLiability[];
  serverDateTime: number;
}

export interface GlRatingLocationOption {
  value: string;
  label: string;
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../shared/config/api-endpoints';
import { GlMasterPoliciesResponse } from '../interface/gl-master-policies.interface';
import { PolicyGeneralLiabilityResponse } from '../interface/policy-general-liability.interface';
import { UnderwritingReviewResponse } from '../interface/underwriting-review.interface';
import { RatingResponse } from '../interface/rating.interface';

@Injectable({
  providedIn: 'root',
})
export class GlRatingService {
  constructor(private readonly http: HttpClient) { }

  getPolicyGeneralLiability(accountId: number, ratingPeriodId: number): Observable<PolicyGeneralLiabilityResponse> {
    const params = new HttpParams().set('accountId', accountId.toString()).set('ratingPeriodId', ratingPeriodId.toString());
    return this.http.get<PolicyGeneralLiabilityResponse>(
      API_ENDPOINTS.glRatingTabLocationUrl, { params }
    );
  }

  getGlMasterPolicies(accountId: number, ratingPeriodId: number, generalLiabilityId?: string,): Observable<GlMasterPoliciesResponse> {
    let params = new HttpParams().set('accountId', accountId.toString()).set('ratingPeriodId', ratingPeriodId.toString());
    if (generalLiabilityId) {
      params = params.set('generalLiabilityId', generalLiabilityId);
    }
    return this.http.get<GlMasterPoliciesResponse>(API_ENDPOINTS.glRatingTabPolicyInputsUrl, { params });
  }

  getGLUnderWriting(accountId: number, ratingPeriodId: number, generalLiabilityId?: string): Observable<UnderwritingReviewResponse> {
    let params = new HttpParams().set('accountId', accountId.toString()).set('ratingPeriodId', ratingPeriodId.toString());
    if (generalLiabilityId) {
      params = params.set('generalLiabilityId', generalLiabilityId);
    }
    return this.http.get<UnderwritingReviewResponse>(API_ENDPOINTS.glRatingTabUnderwritingReviewUrl, { params });
  }

  getGLRating(accountId: number, ratingPeriodId: number, generalLiabilityId?: string): Observable<RatingResponse> {
    let params = new HttpParams().set('accountId', accountId.toString()).set('ratingPeriodId', ratingPeriodId.toString());
    if (generalLiabilityId) {
      params = params.set('generalLiabilityId', generalLiabilityId);
    }
    return this.http.get<RatingResponse>(API_ENDPOINTS.glRatingTabRatingUrl, { params });
  }
}
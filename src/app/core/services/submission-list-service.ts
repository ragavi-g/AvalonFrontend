import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../shared/config/api-endpoints';
import { AccountListResponse, ActivityListResponse } from '../interface/submission-list.interface';

@Injectable({
  providedIn: 'root',
})
export class SubmissionListService {
  constructor(private http: HttpClient) { }

  getAccountList(): Observable<AccountListResponse> {
    return this.http.get<AccountListResponse>(API_ENDPOINTS.submissionListAccountListUrl);
  }

  getActivityList(accountId: number): Observable<ActivityListResponse> {
    const params = new HttpParams().set('accountId', accountId.toString());
    return this.http.get<ActivityListResponse>(API_ENDPOINTS.submissionListAccountListActivityUrl, { params });
  }
}
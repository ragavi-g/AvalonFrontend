import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingScreenHeader {
  private readonly ratingScreenTitleKey = 'ratingScreenHeaderTitle';
  private readonly accountNameKey = 'ratingScreenHeaderAccountName';
  private readonly glStatusKey = 'ratingScreenHeaderGlStatus';
  private readonly accountIdKey = 'ratingScreenHeaderAccountId';
  private readonly ratingPeriodIdKey = 'ratingScreenHeaderRatingPeriodId';

  private ratingScreenTitleSubject = new BehaviorSubject<string>(
    sessionStorage.getItem(this.ratingScreenTitleKey) ?? '',
  );
  ratingScreenTitle$ = this.ratingScreenTitleSubject.asObservable();
  private accountNameSubject = new BehaviorSubject<string>(
    sessionStorage.getItem(this.accountNameKey) ?? '',
  );
  accountName$ = this.accountNameSubject.asObservable();
  private glStatusSubject = new BehaviorSubject<string>(
    sessionStorage.getItem(this.glStatusKey) ?? '',
  );
  glStatus$ = this.glStatusSubject.asObservable();
  private accountIdSubject = new BehaviorSubject<number>(
    Number(sessionStorage.getItem(this.accountIdKey) ?? 0),
  );
  accountId$ = this.accountIdSubject.asObservable();
  private ratingPeriodIdSubject = new BehaviorSubject<number>(
    Number(sessionStorage.getItem(this.ratingPeriodIdKey) ?? 0),
  );
  ratingPeriodId$ = this.ratingPeriodIdSubject.asObservable();

  setRatingScreenTitle(title: string): void {
    this.ratingScreenTitleSubject.next(title);
    if (title) {
      sessionStorage.setItem(this.ratingScreenTitleKey, title);
    } else {
      sessionStorage.removeItem(this.ratingScreenTitleKey);
    }
  }

  setAccountName(accountName: string): void {
    this.accountNameSubject.next(accountName);
    if (accountName) {
      sessionStorage.setItem(this.accountNameKey, accountName);
    } else {
      sessionStorage.removeItem(this.accountNameKey);
    }
  }

  setGlStatus(status: string): void {
    this.glStatusSubject.next(status);
    if (status) {
      sessionStorage.setItem(this.glStatusKey, status);
    } else {
      sessionStorage.removeItem(this.glStatusKey);
    }
  }

  setAccountId(accountId: number): void {
    this.accountIdSubject.next(accountId);
    if (accountId) {
      sessionStorage.setItem(this.accountIdKey, String(accountId));
    } else {
      sessionStorage.removeItem(this.accountIdKey);
    }
  }

  setRatingPeriodId(ratingPeriodId: number): void {
    this.ratingPeriodIdSubject.next(ratingPeriodId);
    if (ratingPeriodId) {
      sessionStorage.setItem(this.ratingPeriodIdKey, String(ratingPeriodId));
    } else {
      sessionStorage.removeItem(this.ratingPeriodIdKey);
    }
  }

  getAccountId(): number {
    return this.accountIdSubject.value;
  }

  getRatingPeriodId(): number {
    return this.ratingPeriodIdSubject.value;
  }

  clear(): void {
    this.setRatingScreenTitle('');
    this.setAccountName('');
    this.setGlStatus('');
    this.setAccountId(0);
    this.setRatingPeriodId(0);
  }
}

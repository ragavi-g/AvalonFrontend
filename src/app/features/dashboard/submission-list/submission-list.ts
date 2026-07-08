import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import {
  COVERAGE_OPTIONS,
  EXECUTE_TASK_OPTIONS,
  type CoverageOption,
  type ExecuteTaskOption,
} from '../../../shared/utils/data/submission_task_options';
import {
  ActivityList,
  AccountList,
  SubmissionActivity,
} from '../../../core/interface/submission-list.interface';
import { getActivityTaskIconPath } from '../../../shared/utils/data/activity-task-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SubmissionListService } from '../../../core/services/submission-list-service';
import { RatingScreenHeader } from '../../../shared/utils/functions/rating-screen-header';

@Component({
  imports: [CommonModule, NgbTooltipModule],
  selector: 'app-submission-list',
  templateUrl: './submission-list.html',
  styleUrl: './submission-list.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmissionList implements OnInit {
  accounts: AccountList[] = [];
  activities: SubmissionActivity[] = [];
  readonly executeTaskOptions = EXECUTE_TASK_OPTIONS;
  readonly coverageOptions = COVERAGE_OPTIONS;
  currentPage = 1;
  itemsPerPage = 20;
  readonly itemsPerPageOptions = [10, 20, 50];
  searchQuery = '';
  visiblePages: number[] = [];
  selectedAccount?: AccountList;
  isItemsPerPageOpen = false;
  private searchTimeout?: ReturnType<typeof setTimeout>;

  selectedTask: ExecuteTaskOption | null = null;
  selectedCoverage: CoverageOption | null = this.coverageOptions[0];
  isTaskDropdownOpen = false;
  isCoverageDropdownOpen = false;
  editingActivityIndex: number | null = null;
  editingNoteDraft = '';
  editingNoteOriginal = '';

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private router: Router,
    private ratingScreenHeader: RatingScreenHeader,
    private submissionListService: SubmissionListService,
    private cdr: ChangeDetectorRef,
  ) {
    this.updateVisiblePages();
  }

  ngOnInit(): void {
    this.submissionListService.getAccountList().subscribe(response => {
      this.accounts = response.data;
      if (this.accounts.length > 0) {
        this.selectAccount(this.accounts[0]);
      }
      this.updateVisiblePages();
      this.cdr.markForCheck();
    });
  }

  get filteredAccounts(): AccountList[] {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      return this.accounts;
    }
    return this.accounts.filter(account =>
      account.AccountName.toLowerCase().includes(query) ||
      account.RatingPeriodName.toLowerCase().includes(query)
    );
  }

  get totalItems(): number {
    return this.filteredAccounts.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  updateVisiblePages(): void {
    const start = Math.max(1, this.currentPage - 1);
    const end = Math.min(start + 2, this.totalPages);
    this.visiblePages = [];
    for (let i = start; i <= end; i++) {
      this.visiblePages.push(i);
    }
  }

  get paginatedAccounts(): AccountList[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredAccounts.slice(startIndex, endIndex);
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    if (this.totalPages <= 3) {
      this.visiblePages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        this.visiblePages.push(i);
      }
    }
    else if (page <= 3) {
      this.visiblePages = [1, 2, 3];
    }
    else if (page >= this.totalPages) {
      this.visiblePages = [
        this.totalPages - 2,
        this.totalPages - 1,
        this.totalPages
      ];
    }
    else {
      this.visiblePages = [
        page - 2,
        page - 1,
        page
      ];
    }
  }

  previousWindow(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextWindow(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToFirstPage(): void {
    this.goToPage(1);
  }

  goToLastPage(): void {
    this.goToPage(this.totalPages);
  }

  onItemsPerPageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.applyItemsPerPage(parseInt(target.value));
  }

  toggleItemsPerPage(event: Event): void {
    event.stopPropagation();
    this.isItemsPerPageOpen = !this.isItemsPerPageOpen;
    this.isTaskDropdownOpen = false;
    this.isCoverageDropdownOpen = false;
  }

  selectItemsPerPage(value: number, event: Event): void {
    event.stopPropagation();
    this.applyItemsPerPage(value);
    this.isItemsPerPageOpen = false;
  }

  getPropertyStatusIcon(status: string): string {
    const statusIcon = status.toLowerCase();
    if (statusIcon === 'review') {
      return 'Property Status Icons/property_review_icon.png'
    }
    if (statusIcon === 'indication') {
      return 'Property Status Icons/property_indication_icon.png'
    }
    if (statusIcon === 'submission') {
      return 'Property Status Icons/property_submit_for_approval_icon.png'
    }
    if (statusIcon === 'quote') {
      return 'Property Status Icons/property_quote_icon.png'
    }
    if (statusIcon === 'bound') {
      return 'Property Status Icons/property_bound_icon.png'
    }
    if (statusIcon === 'bound-endst') {
      return 'Property Status Icons/property_endst_icon.png'
    }
    if (statusIcon === 'dead' || statusIcon === 'cancelled') {
      return 'Property Status Icons/property_dead_icon.png'
    }
    return '';
  }

  getGlStatusIcon(status: string): string {
    const statusIcon = status.toLowerCase();
    if (statusIcon === 'review') {
      return 'GL Status Icons/gl_review_icon.png'
    }
    if (statusIcon === 'indication') {
      return 'GL Status Icons/gl_indication_icon.png'
    }
    if (statusIcon === 'submission') {
      return 'GL Status Icons/gl_submit_for_approval_icon.png'
    }
    if (statusIcon === 'quote') {
      return 'GL Status Icons/gl_quote_icon.png'
    }
    if (statusIcon === 'bound') {
      return 'GL Status Icons/gl_bound_icon.png'
    }
    if (statusIcon === 'bound-endst') {
      return 'GL Status Icons/gl_endst_icon.png'
    }
    if (statusIcon === 'dead' || statusIcon === 'cancelled') {
      return 'GL Status Icons/gl_dead_icon.png'
    }
    return '';
  }

  showGLIcon(account: AccountList): boolean {
    return account.IsGLRecord === 1;
  }

  showPropertyIcon(account: AccountList): boolean {
    const accountName = account.AccountName.toLowerCase();
    return !accountName.includes('-gl add on');
  }

  isAddonAccount(account: AccountList | undefined): boolean {
    if (!account) {
      return false;
    }
    const accountName = account.AccountName.toLowerCase();
    return (
      accountName.includes('-add on') ||
      accountName.includes('-gl add on')
    );
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    this.currentPage = 1;
    this.updateVisiblePages();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.currentPage = 1;
    this.updateVisiblePages();
  }

  openPolicyRater(account: AccountList) {
    this.ratingScreenHeader.setRatingScreenTitle('Policy Rater');
    this.ratingScreenHeader.setAccountName(account.AccountName);
    this.ratingScreenHeader.setGlStatus(account.GLPolicyStatus ?? '');
    this.ratingScreenHeader.setAccountId(account.AccountID);
    this.ratingScreenHeader.setRatingPeriodId(account.RatingPeriodID ?? 0);
    this.router.navigate(['/gl-rating']);
  }

  /** Newest activity first; account setup steps appear at the bottom. */
  get selectedActivities(): SubmissionActivity[] {
    return [...this.activities].reverse();
  }

  get hasActivities(): boolean {
    return this.selectedActivities.length > 0;
  }

  get isNoteModified(): boolean {
    return this.editingNoteDraft !== this.editingNoteOriginal;
  }

  get taskDropdownLabel(): string {
    return this.selectedTask?.label ?? 'Indicate';
  }

  get coverageDropdownLabel(): string {
    return this.selectedCoverage?.label ?? 'GL';
  }

  get showCoverageDropdown(): boolean {
    return this.selectedTask?.label !== 'Remove Submission';
  }

  selectAccount(account: AccountList): void {
    this.selectedAccount = account;
    this.resetNoteEditing();
    this.closeDropdowns();
    this.loadActivityList(account.AccountID);
  }

  private loadActivityList(accountId: number): void {
    // let val:number = 141;
    this.submissionListService.getActivityList(accountId).subscribe({
      next: response => {
        this.activities = (response.data ?? []).map(task => this.mapPolicyTaskToActivity(task));
        this.cdr.markForCheck();
      },
      error: () => {
        this.activities = [];
        this.cdr.markForCheck();
      },
    });
  }

  private mapPolicyTaskToActivity(task: ActivityList): SubmissionActivity {
    return {
      policyTaskId: task.PolicyTaskID,
      taskId: task.TaskID,
      activity_added_by: task.ModBy,
      activity_added_date: this.formatTaskDate(task.TaskDate),
      activity_name: task.TaskText,
      activity_note: task.TaskNotes ?? '',
    };
  }

  private formatTaskDate(taskDate: string): string {
    const date = new Date(taskDate);
    if (Number.isNaN(date.getTime())) {
      return taskDate;
    }
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    });
  }

  toggleTaskDropdown(event: Event): void {
    event.stopPropagation();
    this.isTaskDropdownOpen = !this.isTaskDropdownOpen;
    this.isCoverageDropdownOpen = false;
  }

  toggleCoverageDropdown(event: Event): void {
    event.stopPropagation();
    this.isCoverageDropdownOpen = !this.isCoverageDropdownOpen;
    this.isTaskDropdownOpen = false;
  }

  selectTask(option: ExecuteTaskOption, event: Event): void {
    event.stopPropagation();
    this.selectedTask = option;
    this.isTaskDropdownOpen = false;
    if (!this.showCoverageDropdown) {
      this.isCoverageDropdownOpen = false;
    }
  }

  selectCoverage(option: CoverageOption, event: Event): void {
    event.stopPropagation();
    this.selectedCoverage = option;
    this.isCoverageDropdownOpen = false;
  }

  closeDropdowns(): void {
    this.isTaskDropdownOpen = false;
    this.isCoverageDropdownOpen = false;
    this.isItemsPerPageOpen = false;
  }

  startEditNote(index: number, note: string): void {
    this.editingActivityIndex = index;
    this.editingNoteDraft = note;
    this.editingNoteOriginal = note;
  }

  onNoteInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.editingNoteDraft = target.value;
  }

  cancelEditNote(): void {
    this.resetNoteEditing();
  }

  saveNote(): void {
    if (
      this.editingActivityIndex === null ||
      !this.isNoteModified ||
      this.activities.length === 0
    ) {
      return;
    }
    const sourceIndex = this.getSourceActivityIndex(this.editingActivityIndex);
    this.activities[sourceIndex].activity_note = this.editingNoteDraft;
    this.resetNoteEditing();
    this.cdr.markForCheck();
  }

  /** Maps display index (newest-first) to index in activities (oldest-first). */
  private getSourceActivityIndex(displayIndex: number): number {
    return this.activities.length - 1 - displayIndex;
  }

  isEditingActivity(index: number): boolean {
    return this.editingActivityIndex === index;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .map(part => part[0])
      .slice(0, 1)
      .join('')
      .toUpperCase();
  }

  getActivityIcon(taskId?: number): string {
    return getActivityTaskIconPath(taskId);
  }

  hasActivityIcon(taskId?: number): boolean {
    return this.getActivityIcon(taskId) !== '';
  }

  getActivityIconClass(activityName: string): string {
    const name = activityName.toLowerCase();
    if (name.includes('approved') || name.includes('submission approved')) {
      return 'activity-icon--green';
    }
    if (name.includes('indication') || name.includes('indicate')) {
      return 'activity-icon--purple';
    }
    if (name.includes('submit') || name.includes('approval')) {
      return 'activity-icon--blue';
    }
    if (name.includes('add gl') || name.includes('create new account')) {
      return 'activity-icon--teal';
    }
    if (name.includes('review')) {
      return 'activity-icon--default';
    }
    return 'activity-icon--default';
  }

  trackByActivityIndex(index: number): number {
    return index;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.sl-dropdown') || target.closest('.items-dropdown')) {
      return;
    }
    this.closeDropdowns();
  }

  private applyItemsPerPage(value: number): void {
    this.itemsPerPage = value;
    this.currentPage = 1;
    this.updateVisiblePages();
  }

  private resetNoteEditing(): void {
    this.editingActivityIndex = null;
    this.editingNoteDraft = '';
    this.editingNoteOriginal = '';
  }
}
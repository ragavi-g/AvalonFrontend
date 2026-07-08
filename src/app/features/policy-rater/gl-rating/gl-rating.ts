import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core'; import type { GlRatingLocationOption } from '../../../core/interface/policy-general-liability.interface';
import type { PolicyInput } from '../../../core/interface/policy-inputs.interface';
import type { Rating } from '../../../core/interface/rating.interface';
import type { UnderwritingReview } from '../../../core/interface/underwriting-review.interface';
import { GlRatingService } from '../../../core/services/gl-rating-service';
import { mapGlMasterPoliciesToPolicyInputs } from './policy-input-mapper';
import { RatingScreenHeader } from '../../../shared/utils/functions/rating-screen-header';
import {
  POLICY_INPUT_TABLE_COLUMNS,
  type PolicyInputColumn,
} from './policy-input-columns';
import {
  UNDERWRITING_REVIEW_TABLE_COLUMNS,
  type UnderwritingReviewColumn,
} from './underwriting-review-columns';
import { RATING_TABLE_COLUMNS, type RatingColumn } from './rating-columns';
import { GL_RATING_DEFAULT_LOCATION_OPTION } from './gl-rating.data';
import {
  getGlRatingStickyLeft,
  getGlRatingStickyWidth,
  isGlRatingStickyColumn,
  isLastGlRatingStickyColumn,
  type GlRatingTableName,
} from './gl-rating-sticky-columns';

@Component({
  selector: 'app-gl-rating',
  imports: [CommonModule],
  templateUrl: './gl-rating.html',
  styleUrl: './gl-rating.scss',
})
export class GlRating implements OnInit {
  private readonly actionColumn = { key: 'actions' };
  locationOptions: GlRatingLocationOption[] = [GL_RATING_DEFAULT_LOCATION_OPTION];
  policyInputs: PolicyInput[] = [];
  readonly policyInputColumns = POLICY_INPUT_TABLE_COLUMNS;
  readonly policyInputStickyColumns = [
    this.actionColumn,
    ...POLICY_INPUT_TABLE_COLUMNS,
  ] as ReadonlyArray<{ key: string }>;
  underwritingReview: UnderwritingReview[] = [];
  readonly underwritingReviewColumns = UNDERWRITING_REVIEW_TABLE_COLUMNS;
  readonly underwritingReviewStickyColumns = [
    this.actionColumn,
    ...UNDERWRITING_REVIEW_TABLE_COLUMNS,
  ] as ReadonlyArray<{ key: string }>;
  ratingRows: Rating[] = [];
  readonly ratingColumns = RATING_TABLE_COLUMNS;
  readonly ratingStickyColumns = [
    this.actionColumn,
    ...RATING_TABLE_COLUMNS,
  ] as ReadonlyArray<{ key: string }>;
  accountId!: number;
  ratingPeriodId!: number;
  policyInputsLoading = false;
  policyInputsLoaded = false;
  underwritingReviewLoading = false;
  underwritingReviewLoaded = false;
  ratingLoading = false;
  ratingLoaded = false;

  private policyInputColumnMaxLengths: Record<string, number> = {};

  private underwritingReviewColumnMaxLengths = this.buildColumnMaxLengths(
    this.underwritingReview,
    this.underwritingReviewColumns,
    (row, column) => this.getUnderwritingReviewCellValue(row, column),
  );

  private ratingColumnMaxLengths = this.buildColumnMaxLengths(
    this.ratingRows,
    this.ratingColumns,
    (row, column) => this.getRatingCellValue(row, column),
  );

  selectedLocation = '';
  isLocationDropdownOpen = false;

  constructor(
    private readonly ratingScreenHeader: RatingScreenHeader,
    private readonly glRatingService: GlRatingService,
    private readonly cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.accountId = this.ratingScreenHeader.getAccountId();
    this.ratingPeriodId = this.ratingScreenHeader.getRatingPeriodId();

    if (!this.accountId || !this.ratingPeriodId) {
      this.locationOptions = [GL_RATING_DEFAULT_LOCATION_OPTION];
      return;
    }

    this.loadPolicyGeneralLiability(this.accountId, this.ratingPeriodId);
    this.loadPolicyInputs(this.accountId, this.ratingPeriodId);
  }

  get locationDropdownLabel(): string {
    return (
      this.locationOptions.find((option) => option.value === this.selectedLocation)?.label ??
      'All'
    );
  }

  get ratingPeriod(): string {
    return this.policyInputs[0]?.rating_period ?? '';
  }

  toggleLocationDropdown(event: Event): void {
    event.stopPropagation();
    this.isLocationDropdownOpen = !this.isLocationDropdownOpen;
  }

  selectLocation(value: string, event: Event): void {
    event.stopPropagation();
    this.selectedLocation = value;
    this.isLocationDropdownOpen = false;
    const generalLiabilityId = value || undefined;

    if (value) {
      console.log(value);
    }

    const accountId = this.ratingScreenHeader.getAccountId();
    const ratingPeriodId = this.ratingScreenHeader.getRatingPeriodId();

    if (accountId && ratingPeriodId) {
      // this.underwritingReviewLoaded = false;
      // this.ratingLoaded = false;
      this.loadPolicyInputs(accountId, ratingPeriodId, value || undefined);
      // this.loadUnderwritingReview(this.accountId,this.ratingPeriodId,generalLiabilityId || undefined);
      // this.loadGLRatingScreen(this.accountId,this.ratingPeriodId,generalLiabilityId || undefined);
    }
  }

  refreshPolicyInputs(): void {
    const accountId = this.ratingScreenHeader.getAccountId();
    const ratingPeriodId = this.ratingScreenHeader.getRatingPeriodId();

    if (!accountId || !ratingPeriodId) {
      return;
    }

    this.loadPolicyInputs(
      accountId,
      ratingPeriodId,
      this.selectedLocation || undefined,
    );
  }

  private loadPolicyGeneralLiability(accountId: number, ratingPeriodId: number): void {
    this.glRatingService.getPolicyGeneralLiability(accountId, ratingPeriodId).subscribe({
      next: (response) => {
        this.selectedLocation = '';
        this.locationOptions = [
          GL_RATING_DEFAULT_LOCATION_OPTION,
          ...(response.data ?? []).map((location) => ({
            value: location.GeneralLiabilityID,
            label: location.SearchName,
          })),
        ];
        this.cdr.detectChanges();
      },
      error: () => {
        this.selectedLocation = '';
        this.locationOptions = [GL_RATING_DEFAULT_LOCATION_OPTION];
        this.cdr.detectChanges();
      },
    });
  }

  private loadPolicyInputs(
    accountId: number,
    ratingPeriodId: number,
    generalLiabilityId?: string,
  ): void {
    this.policyInputsLoading = true;
    this.policyInputsLoaded = false;
    this.glRatingService
      .getGlMasterPolicies(accountId, ratingPeriodId, generalLiabilityId)
      .subscribe({
        next: (response) => {
          this.policyInputs = mapGlMasterPoliciesToPolicyInputs(response.data ?? []);
          this.updatePolicyInputColumnMaxLengths();
          this.policyInputsLoading = false;
          this.policyInputsLoaded = true;
          this.cdr.detectChanges();
        },
        error: () => {
          this.policyInputs = [];
          this.updatePolicyInputColumnMaxLengths();
          this.policyInputsLoading = false;
          this.policyInputsLoaded = true;
          this.cdr.detectChanges();
        },
      });
  }

  private updatePolicyInputColumnMaxLengths(): void {
    this.policyInputColumnMaxLengths = this.buildColumnMaxLengths(
      this.policyInputs,
      this.policyInputColumns,
      (row, column) => this.getPolicyInputCellValue(row, column),
    );
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.gl-rating-filter__dropdown')) {
      return;
    }
    this.isLocationDropdownOpen = false;
    if (target.closest('.gl-rating-date') || target.closest('.gl-rating-datepicker')) {
      return;
    }
    this.closeDatePicker();
  }

  sectionExpanded = {
    policyInputs: true,
    underwritingReview: false,
    rating: false,
  };

  readonly monthOptions = [
    { value: 0, label: 'January' },
    { value: 1, label: 'February' },
    { value: 2, label: 'March' },
    { value: 3, label: 'April' },
    { value: 4, label: 'May' },
    { value: 5, label: 'June' },
    { value: 6, label: 'July' },
    { value: 7, label: 'August' },
    { value: 8, label: 'September' },
    { value: 9, label: 'October' },
    { value: 10, label: 'November' },
    { value: 11, label: 'December' },
  ];
  readonly weekdayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  yearOptions: number[] = [];
  calendarWeeks: CalendarDay[][] = [];
  datePickerViewMonth = new Date().getMonth();
  datePickerViewYear = new Date().getFullYear();
  datePickerPosition = { top: 0, left: 0 };
  isMonthDropdownOpen = false;
  isYearDropdownOpen = false;
  private readonly datePickerWidth = 280;
  private readonly datePickerHeight = 360;
  private readonly datePickerOffset = 8;
  private datePickerState: DatePickerState = {
    isOpen: false,
    row: null,
    columnKey: '',
    pendingDate: null,
  };

  loadUnderwritingReview(
    accountId: number,
    ratingPeriodId: number,
    // generalLiabilityId?: string,
  ): void {
    this.underwritingReviewLoading = true;
    this.underwritingReviewLoaded = false;
    this.glRatingService
      .getGLUnderWriting(accountId, ratingPeriodId)
      .subscribe({
        next: (response) => {

          this.underwritingReview = response.data;
          this.underwritingReviewLoading = false;
          this.underwritingReviewLoaded = true;

          this.underwritingReviewColumnMaxLengths =
            this.buildColumnMaxLengths(
              this.underwritingReview,
              this.underwritingReviewColumns,
              (row, column) =>
                this.getUnderwritingReviewCellValue(row, column),
            );
          this.cdr.markForCheck()
        },

        error: (error) => {
          this.underwritingReview = []
          console.error(
            'Error loading underwriting review',
            error,
          );
          this.underwritingReviewLoading = false;
          this.underwritingReviewLoaded = true;
          this.cdr.markForCheck()
        },
      });
  }

  loadGLRatingScreen(
    accountId: number,
    ratingPeriodId: number,
    // generalLiabilityId?: string,
  ): void {
    this.ratingLoading = true;
    this.ratingLoaded = false;
    this.glRatingService
      .getGLRating(accountId, ratingPeriodId)
      .subscribe({

        next: (response) => {

          this.ratingRows = response.data;
          this.ratingLoading = false;
          this.ratingLoaded = true;

          this.ratingColumnMaxLengths =
            this.buildColumnMaxLengths(
              this.ratingRows,
              this.ratingColumns,
              (row, column) =>
                this.getRatingCellValue(row, column),
            );

          this.cdr.markForCheck();
        },

        error: (error) => {
          this.ratingRows = []
          console.error(
            'Error loading GL rating screen',
            error,
          );
          this.ratingLoading = false;
          this.ratingLoaded = true;
          this.cdr.markForCheck();
        },
      });
  }

  refreshUnderwritingReview(): void {
    // this.loadUnderwritingReview(this.accountId, this.ratingPeriodId,this.selectedLocation || undefined);
    this.loadUnderwritingReview(this.accountId, this.ratingPeriodId);
  }

  refreshGLRatingScreen(): void {
    // this.loadGLRatingScreen(this.accountId, this.ratingPeriodId,this.selectedLocation || undefined);
    this.loadGLRatingScreen(this.accountId, this.ratingPeriodId);
  }

  toggleSection(section: keyof typeof this.sectionExpanded): void {
    const wasOpen = this.sectionExpanded[section];

    this.sectionExpanded = {
      policyInputs: false,
      underwritingReview: false,
      rating: false,
    };

    if (!wasOpen) {
      this.sectionExpanded[section] = true;
      if (section === 'underwritingReview' && !this.underwritingReviewLoaded) {

        // this.loadUnderwritingReview(
        //   this.accountId,
        //   this.ratingPeriodId,
        //   this.selectedLocation || undefined,
        // );
        this.loadUnderwritingReview(
          this.accountId,
          this.ratingPeriodId,
        );
      }

      if (section === 'rating' && !this.ratingLoaded) {

        // this.loadGLRatingScreen(
        //   this.accountId,
        //   this.ratingPeriodId,
        //   this.selectedLocation || undefined,
        // );
        this.loadGLRatingScreen(
          this.accountId,
          this.ratingPeriodId,
        );
      }
    }
  }

  trackPolicyInput(row: PolicyInput, index: number): string {
    return `${row.quote_id}-${row.account_loc_id}-${index}`;
  }

  getPolicyInputCellValue(row: PolicyInput, column: PolicyInputColumn): string | number {
    const value = row[column.key];
    return value ?? '';
  }

  isSubmittedStatus(value: string | number): boolean {
    return String(value).toLowerCase() === 'submitted';
  }

  trackUnderwritingReview(row: UnderwritingReview, index: number): string {
    return `${row.AccountLocID}-${row.SubmissionLocID}-${index}`;
  }

  getUnderwritingReviewCellValue(
    row: UnderwritingReview,
    column: UnderwritingReviewColumn,
  ): string | number | boolean {
    const value = row[column.key];
    return value ?? '';
  }

  trackRating(row: Rating, index: number): string {
    return `${row.QuoteID}-${row.Accountlocid}-${index}`;
  }

  addRowBySection(
    section: DeleteSection,
    row: PolicyInput | UnderwritingReview | Rating,
    index: number,
  ): void {
    if (section === 'policyInputs') {
      this.policyInputs = this.insertRowCopy(
        this.policyInputs,
        row as PolicyInput,
        index,
      );
      this.updatePolicyInputColumnMaxLengths();
    } else if (section === 'underwritingReview') {
      this.underwritingReview = this.insertRowCopy(
        this.underwritingReview,
        row as UnderwritingReview,
        index,
      );
      this.updateUnderwritingReviewColumnMaxLengths();
    } else {
      this.ratingRows = this.insertRowCopy(
        this.ratingRows,
        row as Rating,
        index,
      );
      this.updateRatingColumnMaxLengths();
    }
    this.cdr.markForCheck();
  }

  isDeleteModalOpen = false;
  private pendingDelete: { section: DeleteSection; index: number } | null = null;

  openDeleteModal(section: DeleteSection, index: number): void {
    this.pendingDelete = { section, index };
    this.isDeleteModalOpen = true;
  }

  cancelDelete(): void {
    this.pendingDelete = null;
    this.isDeleteModalOpen = false;
  }

  confirmDelete(): void {
    if (!this.pendingDelete) {
      this.isDeleteModalOpen = false;
      return;
    }

    const { section, index } = this.pendingDelete;
    this.removeRowBySection(section, index);

    this.pendingDelete = null;
    this.isDeleteModalOpen = false;
  }

  private removeRowBySection(section: DeleteSection, index: number): void {
    if (section === 'policyInputs') {
      this.policyInputs = this.removeRowAtIndex(this.policyInputs, index);
      this.updatePolicyInputColumnMaxLengths();
    } else if (section === 'underwritingReview') {
      this.underwritingReview = this.removeRowAtIndex(this.underwritingReview, index);
      this.updateUnderwritingReviewColumnMaxLengths();
    } else {
      this.ratingRows = this.removeRowAtIndex(this.ratingRows, index);
      this.updateRatingColumnMaxLengths();
    }
    this.cdr.markForCheck();
  }

  private updateUnderwritingReviewColumnMaxLengths(): void {
    this.underwritingReviewColumnMaxLengths = this.buildColumnMaxLengths(
      this.underwritingReview,
      this.underwritingReviewColumns,
      (entry, column) => this.getUnderwritingReviewCellValue(entry, column),
    );
  }

  private updateRatingColumnMaxLengths(): void {
    this.ratingColumnMaxLengths = this.buildColumnMaxLengths(
      this.ratingRows,
      this.ratingColumns,
      (entry, column) => this.getRatingCellValue(entry, column),
    );
  }

  private insertRowCopy<T>(rows: T[], row: T, index: number): T[] {
    const updated = [...rows];
    updated.splice(index + 1, 0, { ...row });
    return updated;
  }

  private removeRowAtIndex<T>(rows: T[], index: number): T[] {
    if (index < 0 || index >= rows.length) {
      return rows;
    }
    return rows.filter((_, rowIndex) => rowIndex !== index);
  }

  getRatingCellValue(row: Rating, column: RatingColumn): string | number | boolean {
    const value = row[column.key];
    return value ?? '';
  }

  getRatingStatusModifier(status: string | number | boolean): string {
    return String(status).toLowerCase().replace(/\s+/g, '-');
  }

  isStickyColumn(tableName: GlRatingTableName, columnKey: string): boolean {
    return isGlRatingStickyColumn(tableName, columnKey);
  }

  getStickyLeft(
    tableName: GlRatingTableName,
    columnKey: string,
    columns: readonly { key: string }[],
  ): number | null {
    return getGlRatingStickyLeft(tableName, columnKey, columns);
  }

  getStickyWidth(tableName: GlRatingTableName, columnKey: string): number | null {
    return getGlRatingStickyWidth(tableName, columnKey);
  }

  isLastStickyColumn(
    tableName: GlRatingTableName,
    columnKey: string,
    columns: readonly { key: string }[],
  ): boolean {
    return isLastGlRatingStickyColumn(tableName, columnKey, columns);
  }

  getPolicyInputColumnMaxLength(columnKey: string): number {
    return this.policyInputColumnMaxLengths[columnKey] ?? 0;
  }

  getUnderwritingReviewColumnMaxLength(columnKey: string): number {
    return this.underwritingReviewColumnMaxLengths[columnKey] ?? 0;
  }

  getRatingColumnMaxLength(columnKey: string): number {
    return this.ratingColumnMaxLengths[columnKey] ?? 0;
  }

  isPolicyInputWideColumn(columnKey: string): boolean {
    return (
      columnKey === 'entity_name' ||
      columnKey === 'address' ||
      columnKey === 'location_description'
    );
  }

  isUnderwritingReviewWideColumn(columnKey: string): boolean {
    return (
      columnKey === 'entity' ||
      columnKey === 'irpm_location_inside_notes' ||
      columnKey === 'irpm_location_outside_notes' ||
      columnKey === 'irpm_equipment_notes' ||
      columnKey === 'irpm_classification_notes' ||
      columnKey === 'irpm_cooperation_notes' ||
      columnKey === 'location_description'
    );
  }

  isRatingWideColumn(columnKey: string): boolean {
    return (
      columnKey === 'entity' ||
      columnKey === 'address' ||
      columnKey === 'primary_parking_exposure_basis' ||
      columnKey === 'secondary_parking_exposure_basis' ||
      columnKey === 'tertiary_parking_exposure_basis'
    );
  }

  getColumnHeaderLabel(label: string, maxContentLength: number, isWideColumn = false): string {
    const trimmed = label.trim();

    if (trimmed.length <= 7) {
      return trimmed;
    }

    if (isWideColumn || maxContentLength >= trimmed.length) {
      return trimmed;
    }

    return trimmed.slice(0, 5);
  }

  getColumnHeaderTitle(label: string, maxContentLength: number, isWideColumn = false): string | null {
    const trimmed = label.trim();
    const displayLabel = this.getColumnHeaderLabel(trimmed, maxContentLength, isWideColumn);
    return displayLabel === trimmed ? null : trimmed;
  }

  private buildColumnMaxLengths<T, C extends { key: keyof T & string; type?: string }>(
    rows: readonly T[],
    columns: readonly C[],
    getValue: (row: T, column: C) => string | number | boolean,
  ): Record<string, number> {
    const lengths: Record<string, number> = {};

    for (const column of columns) {
      let maxLength = 0;

      for (const row of rows) {
        const value = String(getValue(row, column) ?? '');
        const length = this.getCellDisplayLength(value, column.type);
        if (length > maxLength) {
          maxLength = length;
        }
      }

      lengths[column.key] = maxLength;
    }

    return lengths;
  }

  private getCellDisplayLength(value: string, type?: string): number {
    if (!value) {
      return 0;
    }

    switch (type) {
      case 'badge':
        return value.length + 2;
      case 'status':
        return value.length + 2;
      default:
        return value.length;
    }
  }

  isDateColumn(columnKey: string): boolean {
    return [
      'effective_date',
      'expiration_date',
      'EffectiveDate',
      'ExpirationDate'
    ].includes(columnKey);
  }

  formatDateInputValue(value: string | number | boolean): string {
    if (!value) {
      return '';
    }

    const rawValue = String(value).trim();
    if (!rawValue) {
      return '';
    }

    const isoMatch = rawValue.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (isoMatch) {
      return `${isoMatch[1]}-${isoMatch[2]}-${isoMatch[3]}`;
    }

    const slashMatch = rawValue.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (slashMatch) {
      return `${slashMatch[3]}-${this.padDatePart(slashMatch[1])}-${this.padDatePart(
        slashMatch[2],
      )}`;
    }

    const parsedDate = new Date(rawValue);
    if (Number.isNaN(parsedDate.getTime())) {
      return '';
    }

    return `${parsedDate.getFullYear()}-${this.padDatePart(
      String(parsedDate.getMonth() + 1),
    )}-${this.padDatePart(String(parsedDate.getDate()))}`;
  }

  formatDateDisplay(value: string | number | boolean): string {
    if (!value) {
      return '';
    }

    const rawValue = String(value).trim();
    if (!rawValue) {
      return '';
    }

    const isoMatch = rawValue.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (isoMatch) {
      return `${isoMatch[2]}/${isoMatch[3]}/${isoMatch[1]}`;
    }

    const slashMatch = rawValue.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (slashMatch) {
      return `${this.padDatePart(slashMatch[1])}/${this.padDatePart(slashMatch[2])}/${slashMatch[3]}`;
    }

    const parsedDate = new Date(rawValue);
    if (Number.isNaN(parsedDate.getTime())) {
      return '';
    }

    return `${this.padDatePart(parsedDate.getMonth() + 1)}/${this.padDatePart(
      parsedDate.getDate(),
    )}/${parsedDate.getFullYear()}`;
  }

  private padDatePart(value: string | number): string {
    return String(value).padStart(2, '0');
  }

  isDatePickerOpen(row: PolicyInput | UnderwritingReview | Rating, columnKey: string): boolean {
    return this.datePickerState.isOpen &&
      this.datePickerState.row === row &&
      this.datePickerState.columnKey === columnKey;
  }

  openDatePicker(
    row: PolicyInput | UnderwritingReview | Rating,
    columnKey: string,
    event: Event,
  ): void {
    event.stopPropagation();
    this.updateDatePickerPosition(event.currentTarget as HTMLElement | null);
    const currentValue = (row as unknown as Record<string, string | number | boolean | undefined>)[
      columnKey
    ];
    const parsedDate = this.resolveInitialDate(currentValue);
    const baseDate = parsedDate ?? new Date();
    this.datePickerState = {
      isOpen: true,
      row,
      columnKey,
      pendingDate: parsedDate,
    };
    this.datePickerViewMonth = baseDate.getMonth();
    this.datePickerViewYear = baseDate.getFullYear();
    this.buildYearOptions(this.datePickerViewYear);
    this.updateCalendar();
  }

  private updateDatePickerPosition(anchor: HTMLElement | null): void {
    if (!anchor) {
      return;
    }

    const rect = anchor.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const fitsBelow = rect.bottom + this.datePickerHeight + this.datePickerOffset <= viewportHeight;
    const top = fitsBelow
      ? rect.bottom + this.datePickerOffset
      : Math.max(this.datePickerOffset, rect.top - this.datePickerHeight - this.datePickerOffset);
    let left = rect.right - this.datePickerWidth;
    if (left < this.datePickerOffset) {
      left = Math.min(rect.left, viewportWidth - this.datePickerWidth - this.datePickerOffset);
    }
    left = Math.max(this.datePickerOffset, left);
    this.datePickerPosition = { top, left };
  }

  closeDatePicker(): void {
    this.datePickerState = {
      isOpen: false,
      row: null,
      columnKey: '',
      pendingDate: null,
    };
    this.closeDatePickerDropdowns();
  }

  onDatePickerClick(event: Event): void {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    if (target.closest('.gl-rating-datepicker__dropdown')) {
      return;
    }
    this.closeDatePickerDropdowns();
  }

  changeMonth(offset: number): void {
    const next = new Date(this.datePickerViewYear, this.datePickerViewMonth + offset, 1);
    this.datePickerViewMonth = next.getMonth();
    this.datePickerViewYear = next.getFullYear();
    this.buildYearOptions(this.datePickerViewYear);
    this.updateCalendar();
  }

  onMonthChange(event: Event): void {
    const value = Number((event.target as HTMLSelectElement).value);
    this.datePickerViewMonth = value;
    this.updateCalendar();
  }

  onYearChange(event: Event): void {
    const value = Number((event.target as HTMLSelectElement).value);
    this.datePickerViewYear = value;
    this.updateCalendar();
  }

  toggleMonthDropdown(event: Event): void {
    event.stopPropagation();
    this.isMonthDropdownOpen = !this.isMonthDropdownOpen;
    if (this.isMonthDropdownOpen) {
      this.isYearDropdownOpen = false;
    }
  }

  toggleYearDropdown(event: Event): void {
    event.stopPropagation();
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
    if (this.isYearDropdownOpen) {
      this.isMonthDropdownOpen = false;
    }
  }

  selectMonth(value: number, event: Event): void {
    event.stopPropagation();
    this.datePickerViewMonth = value;
    this.isMonthDropdownOpen = false;
    this.updateCalendar();
  }

  selectYear(value: number, event: Event): void {
    event.stopPropagation();
    this.datePickerViewYear = value;
    this.isYearDropdownOpen = false;
    this.updateCalendar();
  }

  selectDate(day: CalendarDay): void {
    this.datePickerState.pendingDate = day.date;
    if (
      day.date.getMonth() !== this.datePickerViewMonth ||
      day.date.getFullYear() !== this.datePickerViewYear
    ) {
      this.datePickerViewMonth = day.date.getMonth();
      this.datePickerViewYear = day.date.getFullYear();
      this.buildYearOptions(this.datePickerViewYear);
    }
    this.updateCalendar();
  }

  applyDate(): void {
    if (!this.datePickerState.row || !this.datePickerState.columnKey) {
      this.closeDatePicker();
      return;
    }

    const value = this.datePickerState.pendingDate
      ? this.formatIsoDate(this.datePickerState.pendingDate)
      : '';
    (this.datePickerState.row as unknown as Record<string, string>)[
      this.datePickerState.columnKey
    ] = value;
    this.closeDatePicker();
  }

  cancelDate(): void {
    this.closeDatePicker();
  }

  private closeDatePickerDropdowns(): void {
    this.isMonthDropdownOpen = false;
    this.isYearDropdownOpen = false;
  }

  private formatIsoDate(date: Date): string {
    return `${date.getFullYear()}-${this.padDatePart(date.getMonth() + 1)}-${this.padDatePart(
      date.getDate(),
    )}`;
  }

  private parseDateValue(value: string | number | boolean | undefined): Date | null {
    if (!value) {
      return null;
    }
    const parts = this.extractDateParts(String(value));
    if (!parts) {
      return null;
    }

    const parsedDate = new Date(parts.year, parts.month - 1, parts.day);
    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
  }

  private parseDateFromDisplay(value: string): Date | null {
    if (!value) {
      return null;
    }
    const parts = this.extractDateParts(value);
    if (!parts) {
      return null;
    }

    const parsedDate = new Date(parts.year, parts.month - 1, parts.day);
    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
  }

  private resolveInitialDate(value: string | number | boolean | undefined): Date | null {
    const displayValue = this.formatDateDisplay(value ?? '');
    return this.parseDateFromDisplay(displayValue) ?? this.parseDateValue(value);
  }

  private extractDateParts(value: string): { year: number; month: number; day: number } | null {
    const rawValue = value.trim();
    if (!rawValue) {
      return null;
    }

    const patterns: Array<{ regex: RegExp; order: ['year', 'month', 'day'] | ['month', 'day', 'year'] }> = [
      { regex: /^(\d{4})-(\d{2})-(\d{2})/, order: ['year', 'month', 'day'] },
      { regex: /^(\d{4})\/(\d{2})\/(\d{2})/, order: ['year', 'month', 'day'] },
      { regex: /^(\d{1,2})\/(\d{1,2})\/(\d{4})/, order: ['month', 'day', 'year'] },
      { regex: /^(\d{1,2})-(\d{1,2})-(\d{4})/, order: ['month', 'day', 'year'] },
      { regex: /^(\d{4})(\d{2})(\d{2})$/, order: ['year', 'month', 'day'] },
    ];

    for (const pattern of patterns) {
      const match = rawValue.match(pattern.regex);
      if (!match) {
        continue;
      }

      const parts = {
        year: 0,
        month: 0,
        day: 0,
      };

      if (pattern.order[0] === 'year') {
        parts.year = Number(match[1]);
        parts.month = Number(match[2]);
        parts.day = Number(match[3]);
      } else {
        parts.month = Number(match[1]);
        parts.day = Number(match[2]);
        parts.year = Number(match[3]);
      }

      if (!parts.year || !parts.month || !parts.day) {
        return null;
      }

      if (parts.month < 1 || parts.month > 12 || parts.day < 1 || parts.day > 31) {
        return null;
      }

      return parts;
    }

    return null;
  }

  private buildYearOptions(baseYear: number): void {
    const start = baseYear - 10;
    const end = baseYear + 10;
    this.yearOptions = Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  private updateCalendar(): void {
    const viewDate = new Date(this.datePickerViewYear, this.datePickerViewMonth, 1);
    this.calendarWeeks = this.buildCalendarWeeks(viewDate, this.datePickerState.pendingDate);
  }

  private buildCalendarWeeks(viewDate: Date, selectedDate: Date | null): CalendarDay[][] {
    const weeks: CalendarDay[][] = [];
    const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    const startOffset = firstDay.getDay();
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - startOffset);
    const today = new Date();

    let current = new Date(startDate);
    for (let weekIndex = 0; weekIndex < 6; weekIndex += 1) {
      const week: CalendarDay[] = [];
      for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
        const dayDate = new Date(current);
        week.push({
          key: `${dayDate.getFullYear()}-${dayDate.getMonth()}-${dayDate.getDate()}`,
          label: dayDate.getDate(),
          date: dayDate,
          isCurrentMonth: dayDate.getMonth() === viewDate.getMonth(),
          isToday: this.isSameDay(dayDate, today),
          isSelected: selectedDate ? this.isSameDay(dayDate, selectedDate) : false,
        });
        current.setDate(current.getDate() + 1);
      }
      weeks.push(week);
    }
    return weeks;
  }

  private isSameDay(left: Date, right: Date): boolean {
    return left.getFullYear() === right.getFullYear() &&
      left.getMonth() === right.getMonth() &&
      left.getDate() === right.getDate();
  }
}

type DatePickerState = {
  isOpen: boolean;
  row: PolicyInput | UnderwritingReview | Rating | null;
  columnKey: string;
  pendingDate: Date | null;
};

type CalendarDay = {
  key: string;
  label: number;
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
};

type DeleteSection = 'policyInputs' | 'underwritingReview' | 'rating';

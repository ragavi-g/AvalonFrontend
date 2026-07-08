export type GlRatingTableName = 'policyInputs' | 'underwritingReview' | 'rating';

/** Response field keys that stay fixed while horizontally scrolling each table. */
export const GL_RATING_STICKY_COLUMNS: Record<GlRatingTableName, readonly string[]> = {
  policyInputs: ['actions', 'quote_id', 'policy_id', 'account_loc_id'],
  underwritingReview: ['actions', 'AccountLocID', 'SubmissionLocID'],
  rating: ['actions', 'QuoteID', 'PolicyID', 'Accountlocid', 'SubmissionLocID'],
};

/** Minimum widths used to calculate cumulative sticky `left` offsets. */
export const GL_RATING_STICKY_COLUMN_WIDTHS: Record<
  GlRatingTableName,
  Readonly<Record<string, number>>
> = {
  policyInputs: {
    actions: 72,
    quote_id: 118,
    policy_id: 44,
    account_loc_id: 52,
  },
  underwritingReview: {
    actions: 72,
    AccountLocID: 52,
    SubmissionLocID: 68,
  },
  rating: {
    actions: 72,
    QuoteID: 118,
    PolicyID: 44,
    Accountlocid: 52,
    SubmissionLocID: 68,
  },
};

const DEFAULT_STICKY_WIDTH = 110;

export function isGlRatingStickyColumn(
  tableName: GlRatingTableName,
  columnKey: string,
): boolean {
  return GL_RATING_STICKY_COLUMNS[tableName].includes(columnKey);
}

export function getGlRatingStickyLeft(
  tableName: GlRatingTableName,
  columnKey: string,
  columns: readonly { key: string }[],
): number | null {
  if (!isGlRatingStickyColumn(tableName, columnKey)) {
    return null;
  }

  const widths = GL_RATING_STICKY_COLUMN_WIDTHS[tableName];
  let left = 0;

  for (const column of columns) {
    if (column.key === columnKey) {
      return left;
    }

    if (isGlRatingStickyColumn(tableName, column.key)) {
      left += widths[column.key] ?? DEFAULT_STICKY_WIDTH;
    }
  }

  return null;
}

export function getGlRatingStickyWidth(
  tableName: GlRatingTableName,
  columnKey: string,
): number | null {
  if (!isGlRatingStickyColumn(tableName, columnKey)) {
    return null;
  }

  return GL_RATING_STICKY_COLUMN_WIDTHS[tableName][columnKey] ?? DEFAULT_STICKY_WIDTH;
}

export function isLastGlRatingStickyColumn(
  tableName: GlRatingTableName,
  columnKey: string,
  columns: readonly { key: string }[],
): boolean {
  const stickyKeysInTable = columns
    .map((column) => column.key)
    .filter((key) => isGlRatingStickyColumn(tableName, key));

  return stickyKeysInTable[stickyKeysInTable.length - 1] === columnKey;
}

/** Total width of all sticky columns; used for the continuous divider overlay. */
export function getGlRatingStickyDividerLeft(
  tableName: GlRatingTableName,
  columns: readonly { key: string }[],
): number {
  const widths = GL_RATING_STICKY_COLUMN_WIDTHS[tableName];
  let total = 0;

  for (const column of columns) {
    if (isGlRatingStickyColumn(tableName, column.key)) {
      total += widths[column.key] ?? DEFAULT_STICKY_WIDTH;
    }
  }

  return total;
}

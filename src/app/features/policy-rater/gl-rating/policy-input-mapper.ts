import type { GlMasterPolicy } from '../../../core/interface/gl-master-policies.interface';
import type { PolicyInput } from '../../../core/interface/policy-inputs.interface';
import {
  POLICY_INPUT_TABLE_COLUMNS,
  type PolicyInputColumn,
  type PolicyInputValueFormat,
} from './policy-input-columns';

function formatDate(value: string | null | undefined): string {
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
    return `${slashMatch[3]}-${padDatePart(slashMatch[1])}-${padDatePart(slashMatch[2])}`;
  }

  const parsedDate = new Date(rawValue);
  if (Number.isNaN(parsedDate.getTime())) {
    return '';
  }

  return `${parsedDate.getFullYear()}-${padDatePart(parsedDate.getMonth() + 1)}-${padDatePart(
    parsedDate.getDate(),
  )}`;
}

function padDatePart(value: string | number): string {
  return String(value).padStart(2, '0');
}

function formatBoolean(value: boolean | null | undefined): string {
  if (value === null || value === undefined) {
    return '';
  }

  return value ? 'Yes' : 'No';
}

function formatPercentNumber(value: number | null | undefined): number {
  if (value === null || value === undefined) {
    return 0;
  }

  return value <= 1 ? Math.round(value * 100) : Math.round(value);
}

function formatPercentString(value: number | null | undefined): string {
  if (value === null || value === undefined) {
    return '';
  }

  const percent = value <= 1 ? value * 100 : value;
  return String(Math.round(percent));
}

function formatNumber(value: number | null | undefined): number {
  return value ?? 0;
}

function formatText(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }

  return String(value);
}

function getApiValue(item: GlMasterPolicy, apiKey: string): unknown {
  return item[apiKey as keyof GlMasterPolicy];
}

function formatNullableNumber(value: number | null | undefined): string | number {
  if (value === null || value === undefined) {
    return '';
  }

  return value;
}

function transformValue(
  value: unknown,
  format: PolicyInputValueFormat | undefined,
): string | number {
  switch (format) {
    case 'date':
      return formatDate(value as string | null | undefined);
    case 'boolean':
      return formatBoolean(value as boolean | null | undefined);
    case 'percent':
      return formatPercentNumber(value as number | null | undefined);
    case 'percentString':
      return formatPercentString(value as number | null | undefined);
    case 'number':
      return formatNumber(value as number | null | undefined);
    case 'nullableNumber':
      return formatNullableNumber(value as number | null | undefined);
    default:
      return formatText(value);
  }
}

function mapColumnValue(item: GlMasterPolicy, column: PolicyInputColumn): string | number {
  if (!column.apiKey) {
    return '';
  }

  return transformValue(getApiValue(item, column.apiKey), column.format);
}

export function mapGlMasterPolicyToPolicyInput(item: GlMasterPolicy): PolicyInput {
  const policyInput = {
    rating_period: item.RatingPeriodName ?? '',
  } as PolicyInput;

  for (const column of POLICY_INPUT_TABLE_COLUMNS) {
    (policyInput as unknown as Record<string, string | number>)[column.key] = mapColumnValue(
      item,
      column,
    );
  }

  return policyInput;
}

export function mapGlMasterPoliciesToPolicyInputs(items: GlMasterPolicy[]): PolicyInput[] {
  return items.map(mapGlMasterPolicyToPolicyInput);
}

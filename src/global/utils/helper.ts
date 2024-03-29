import { BigNumber } from "@ijstech/eth-wallet";
import { FormatUtils, moment } from '@ijstech/components';

export const DefaultDateFormat = 'DD/MM/YYYY';

export const formatDate = (date: any, customType?: string, showTimezone?: boolean) => {
  const formatType = customType || DefaultDateFormat;
  const formatted = moment(date).format(formatType);
  if (showTimezone) {
    return `${formatted} (UTC+${moment().utcOffset() / 60})`;
  }
  return formatted;
}

export const formatNumber = (value: number | string | BigNumber, decimalFigures?: number) => {
  const newValue = typeof value === 'object' ? value.toFixed() : value;
  const minValue = '0.0000001';
  return FormatUtils.formatNumber(newValue, {decimalFigures: decimalFigures || 4, minValue});
};

export const isInvalidInput = (val: any) => {
  const value = new BigNumber(val);
  if (value.lt(0)) return true;
  return (val || '').toString().substring(0, 2) === '00' || val === '-';
};

export const limitInputNumber = (input: any, decimals?: number) => {
  const amount = input.value;
  if (isInvalidInput(amount)) {
    input.value = '0';
    return;
  }
  const bigValue = new BigNumber(amount);
  if (!bigValue.isNaN() && !bigValue.isZero() && /\d+\.\d+/g.test(amount || '')) {
    input.value = new BigNumber(amount).dp(decimals || 18, 1).toFixed();
  }
}


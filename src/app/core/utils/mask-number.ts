
/**
 * Docs: https://github.com/uNmAnNeR/imaskjs/tree/master/packages/angular-imask
 *
 * @example
 * In Angular:
 * 
  import  as IMASK from 'app/core/utils/mask-number';
 * 
 * import IMask from 'imask';
 * maskNumber: IMask.MaskedNumber = new IMask.MaskedNumber(IMASK.MASK_NUMBER_DEFAULT);
 * [imask] = maskNumber
 * 
 * Update Options
 * this.maskNumber.updateOptions({ [key: string]: value });
 * 
 * Error: value should be string
 * Fix: unmask="typed" || String(value)
 * 
 */

export const MASK_NUMBER_DEFAULT = {
  mask: Number,
  scale: 2,
  signed: false,
  thousandsSeparator: '',
  padFractionalZeros: false,
  normalizeZeros: true,
  radix: '.',
  mapToRadix: ['.'],
  min: -1000000000000000000000000,
  max: 1000000000000000000000000
};

export const MASK_NUMBER_ALLOW_NEGATIVE = {
  mask: Number,
  scale: 2,
  signed: true,
  thousandsSeparator: ',',
  padFractionalZeros: true,
  normalizeZeros: false,
  radix: '.',
  mapToRadix: ['.']
};

export const MASK_NUMBER_ONLY_POSITIVE = {
  mask: Number,
  scale: 2,
  signed: false,
  thousandsSeparator: ',',
  padFractionalZeros: true,
  normalizeZeros: false,
  radix: '.',
  mapToRadix: ['.']
};

export const MASK_NUMBER_INTERGER_ALLOW_NEGATIVE = {
  mask: Number,
  scale: 0,
  signed: true
};

export const MASK_NUMBER_INTERGER_ONLY_POSITIVE = {
  mask: Number,
  scale: 0,
  signed: false
};

export const MASK_NUMBER_PERCENT = {
  mask: Number,
  scale: 2,
  signed: false,
  thousandsSeparator: ',',
  padFractionalZeros: false,
  normalizeZeros: false,
  radix: '.',
  mapToRadix: ['.'],
  min: 0,
  max: 100
};
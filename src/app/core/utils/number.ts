import Big from 'big.js';

export function multiply(value1: number | string, value2: number | string): string {
  return Big(value1).times(value2).valueOf();
}

export function divide(value1: number | string, value2: number | string): string {
  return Big(value1).div(value2).valueOf();
}

export function subtract(value1: number | string, value2: number | string): string {
  return Big(value1).minus(value2).valueOf();
}

export function plus(value1: number | string, value2: number | string): string {
  return Big(value1).plus(value2).valueOf();
}

export function cutTo(value: number | string, decimal: number = 0): string {
  Big.RM = 0;
  return Big(value).toFixed(decimal).valueOf();
}

/**
 * "RoundingMode"
 * RoundDown = 0,
 * RoundHalfUp = 1
 * RoundHalfEven = 2
 * RoundUp = 3
 */
export function roundTo(value: number | string, decimal: number = 0, roundMode: number = 0): string {
  return Big(value).round(decimal, roundMode).valueOf();
}

export function remainder(value1: number | string, value2: string | number): string {
  return Big(value1).mod(value2).valueOf();
}

export function abs(value: number | string): string {
  return Big(value).abs().valueOf();
}

export function sqrt(value: number | string): string {
  return Big(value).sqrt().valueOf();
}

export function pow(value: number | string, exp: number = 1): string {
  return Big(value).pow(exp).valueOf();
}

export function toNumber(value: string | number): number {
  return Big(value).toNumber();
}

export function toFormat(value: number | string, decimal: number = 0, ts: string = ',', ds: string = '.'): string {
  let arr: string[] = cutTo(value, decimal).split(ds);
  arr[0] = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ts);
  return arr.join(ds);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
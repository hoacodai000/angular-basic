
/**
 * 'Timezone'
 * https://github.com/heineiuo/date-fns-format-zone/blob/master/timezone.json
 * 
 */

import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezonesp from 'dayjs/plugin/timezone';
import * as toobject from 'dayjs/plugin/toObject';
import * as relativetime from 'dayjs/plugin/relativeTime';

export const TIMEZONE = 'Asia/Saigon';
export const TEMPLATE_DD_MMM_YYYY = 'DD MMM YYYY';
export const TEMPLATE_DD_MM_YYYY = 'DD MM YYYY';
export const TEMPLATE_SLASH_DD_MM_YYYY = 'DD/MM/YYYY';
export const TEMPLATE_DASH_DD_MM_YYYY = 'DD-MM-YYYY';
export const TEMPLATE_HH_MM_SS = 'HH:mm:ss';

export interface DayjsObject {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}
//unit => 'date', 'year, 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'

export function isValid(value: dayjs.ConfigType): boolean {
  return dayjs(value).isValid();
}

export function now(): dayjs.Dayjs {
  return timezone(new Date());
}

export function toDate(): Date {
  return dayjs().toDate();
}

export function addDay(day: dayjs.ConfigType, value: number, unit?: dayjs.OpUnitType): dayjs.Dayjs {
  return timezone(day).add(value, unit);
}

export function subtractDay(day: dayjs.ConfigType, value: number, unit?: dayjs.OpUnitType): dayjs.Dayjs {
  return timezone(day).subtract(value, unit);
}

export function setDay(day: dayjs.ConfigType, value: number, unit: dayjs.UnitType): dayjs.Dayjs {
  return timezone(day).set(unit, value);
}

export function diffDay(value1: dayjs.ConfigType, value2: dayjs.ConfigType, unit?: dayjs.QUnitType | dayjs.OpUnitType, float?: boolean): number {
  return dayjs(value1).diff(value2, unit, float);
}

export function toFormat(value: dayjs.ConfigType, template?: string): string {
  return timezone(value).format(template);
}

export function toObject(value?: dayjs.ConfigType): DayjsObject {
  dayjs.extend(toobject);
  return timezone(value).toObject();
}

export function fromNow(value?: dayjs.ConfigType): string {
  dayjs.extend(relativetime);
  return timezone(value).fromNow();
}

export function toNow(value?: dayjs.ConfigType): string {
  dayjs.extend(relativetime);
  return timezone(value).toNow();
}

export function timezone(value?: dayjs.ConfigType, tz: string = TIMEZONE): dayjs.Dayjs {
  dayjs.extend(utc);
  dayjs.extend(timezonesp);
  return dayjs(value).tz(tz);
}

export function timeUTC(value?: dayjs.ConfigType): dayjs.Dayjs {
  return timezone(value).utc();
}
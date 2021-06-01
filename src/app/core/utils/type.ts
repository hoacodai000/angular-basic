
export function isNull(value: any): value is null {
  return value === null;
}

export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}

export function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function isEmptyString(value: any): value is string {
  return (typeof value === 'string' && 0 === value.length);
}

export function isNumber(value: any): value is number {
  return (typeof value === 'number' && !isNaN(value));
}

export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

export function isObject(value: any): value is object {
  return typeof value === 'object';
}

export function isEmptyObject(obj: unknown): obj is object {
  if (!(typeof obj === 'object')) {
    return false;
  }
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

export function isDate(value: any): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]';
}

export function isFunction(obj: unknown): obj is Function {
  return typeof obj === 'function';
}

export function isSymbol(value: any): value is symbol {
  return typeof value === 'symbol';
}

export function isRegExp(value: any): value is RegExp {
  return Object.prototype.toString.call(value) === '[object RegExp]';
}

export function isError(value: any): value is Error {
  return (
    Object.prototype.toString.call(value) === '[object Error]' ||
    value instanceof Error
  );
}

export function isStructure<T>(value: any | { [key: string]: any }, matcher: T): value is T {
  for (let key in matcher) {
    if (typeof value[key] !== typeof matcher[key]) {
      return false;
    }
  }
  return true;
}

export function isEmpty(value: any): boolean {
  return (
    (value === null) ||
    (value === undefined) ||
    (value.size === 0) ||
    (value !== value) ||
    (value.length === 0 && typeof value !== 'function') ||
    (value.constructor === Object && Object.keys(value).length === 0)
  );
}

// return type: "Null", "Undefined", "Object", "Array", "Number", "Boolean", "String", "Function", "RegExp", "Symbol", "Error"
export function getType(value: any): string {
  return (
    value === null
      ? 'Null'
      : value === undefined
        ? 'Undefined'
        : Object.prototype.toString.call(value).slice(8, -1)
  );
}

export function getAllPropertyNames(value: object): string[] {
  let res: string[] = [];
  let proto = Object.getPrototypeOf(value);
  while (Object.prototype !== proto) {
    res = res.concat(Object.getOwnPropertyNames(proto));
    proto = Object.getPrototypeOf(proto);
  }
  return res;
}

export function getAllMethodNames(value: object): string[] {
  let methods: string[] = [];
  for (const prop of getAllPropertyNames(value)) {
    if (typeof (value as any)[prop] === 'function') {
      methods.push(prop);
    }
  }
  return methods;
}
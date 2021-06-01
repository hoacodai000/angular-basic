
export function uniquify<T>(value: T[]): T[] {
  return [...new Set(value)];
}

export function uniquifyByeKey<T extends Object, P extends keyof T>(value: T[], key: P): T[] {
  let cache: Set<T[P]> = new Set<T[P]>();
  return value.filter(item => {
    if (cache.has(item[key])) {
      return false;
    }
    cache.add(item[key]);
    return true;
  });
}

export function extracDuplicateByKey<T extends Object, P extends keyof T>(value: T[], key: P): T[] {
  let cache: Set<T[P]> = new Set<T[P]>();
  return value.filter(item => {
    if (cache.has(item[key])) {
      return true;
    }
    cache.add(item[key]);
    return false;
  });
}

export function remove<T = any>(value: T[], item: T, multi: boolean = false): T[] {
  let index: number = value.indexOf(item);
  if (index < 0) {
    return [...value];
  }
  do {
    value = [...value.splice(0, index), ...value.splice(index + 1)];
  } while (multi && index > -1);
  return value;
}

export function removeByKey<T, K extends keyof T>(array: T[], key: K, value: T[K], multi: boolean = false): T[] {
  let index: number = array.findIndex((item: T) => item[key] === value);
  if (index < 0) {
    return [...array];
  }
  do {
    array = [...array.splice(0, index), ...array.splice(index + 1)];
    index = array.findIndex((item: T) => item[key] === value);
  } while (multi && index > -1);
  return array;
}
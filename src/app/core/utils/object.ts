
export function equalObject(value1: any, value2: any, stack: any[] = []): boolean {
  if (value1 === value2) {
    return true;
  }

  const type1 = typeof value1;
  if (type1 !== typeof value2) {
    return false;
  }

  if (type1 === 'number') {
    return (isNaN(value1) && isNaN(value2));
  }

  if (type1 === 'function') {
    return String(value1).toString() === String(value2).toString();
  }

  const listType: string[] = ['bigint', 'boolean', 'string', 'symbol'];
  if (listType.includes(type1)) {
    return false;
  }

  if (value1 instanceof Date) {
    if (!(value2 instanceof Date)) {
      return false;
    }
    const asNum1: number = +value1, asNum2: number = +value2;
    return asNum1 === asNum2 || (isNaN(asNum1) && isNaN(asNum2));
  }

  if (stack.includes(value1)) {
    throw new Error(`equalObject value1 is error`);
  }

  stack.push(value1);

  if (Array.isArray(value1)) {
    if (!Array.isArray(value2)) {
      return false;
    }

    const length: number = value1.length;

    if (length !== value2.length) {
      return false;
    }

    for (let i = 0; i < length; i++) {
      if (!equalObject(value1[i], value2[i], stack)) {
        return false;
      }
    }
    return true;
  }

  const keys1: string[] = Object.keys(value1);
  const keys2: string[] = Object.keys(value2);
  const numKeys: number = keys1.length;

  if (keys2.length !== numKeys) {
    return false;
  }

  if (numKeys === 0) {
    return true;
  }

  keys1.sort();
  keys2.sort();

  for (let i = 0; i < numKeys; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  }

  for (let i = 0; i < numKeys; i++) {
    if (!equalObject(value1[keys1[i]], value2[keys1[i]], stack)) {
      return false;
    }
  }

  stack.pop();

  return true;
}
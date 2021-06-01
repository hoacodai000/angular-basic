
export function isFalsyOrWhitespace(value: string | undefined): boolean {
  if (!value || typeof value !== 'string') {
    return true;
  }
  return value.trim().length === 0;
}

export function count(value: string, character: string): number {
  let result: number = 0;
  const ch: number = character.charCodeAt(0);
  for (let i: number = value.length - 1; i >= 0; i--) {
    if (value.charCodeAt(i) === ch) {
      result++;
    }
  }
  return result;
}

export function truncate(value: string, maxLength: number, suffix: string = '…'): string {
  if (value.length <= maxLength) {
    return value;
  }
  return `${value.substr(0, maxLength)}${suffix}`;
}

export function uppercaseFirstLetter(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function titleCase(value: string): string {
  return value.split(' ')
    .map(((word: string) => word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ');
}


export async function asyncMap<T, U>(array: T[], mapper: (value: T, index: number, array: T[]) => Promise<U>): Promise<U[]> {
  const promises: Promise<U>[] = array.map(mapper);
  return await Promise.all(promises);
}

export async function tryCatch<T, E = any>(promise: Promise<T>): Promise<[E, T]> {
  try {
    const result: T = await promise;
    return [null!, result];
  } catch (error) {
    return [error, null!];
  }
}

export function stopEvent(event: Event): void {
  event.preventDefault();
  event.stopPropagation();
}
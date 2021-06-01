
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
    let r: number = Math.random() * 16 | 0, v: number = (c === 'x') ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
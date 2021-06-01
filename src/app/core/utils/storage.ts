
interface IProxyStorage<K, V> {
  getItem: (key: K) => V | null;
  setItem: (key: K, value: V) => void;
  removeItem: (key: K) => void;
  clear?: () => void;
}

export class LocalStorageProxy implements IProxyStorage<string, string> {
  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}

export class MemoryStorageProxy<K, V> implements IProxyStorage<K, V> {
  private _memoryStorage: Map<K, V> = new Map<K, V>();

  public getItem(key: K): V | null {
    return this._memoryStorage.get(key) ?? null;
  }

  public setItem(key: K, value: V): void {
    this._memoryStorage.set(key, value);
  }

  public removeItem(key: K): void {
    this._memoryStorage.delete(key);
  }
}
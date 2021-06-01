import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface BroadcastEvent<T> {
  key: string;
  data?: T
}

export class Broadcaster<T> {
  private _eventBus: Subject<BroadcastEvent<T>>;

  protected constructor() {
    this._eventBus = new Subject<BroadcastEvent<T>>();
  }

  public broadcast(key: string, data?: T): void {
    this._eventBus.next({ key, data });
  }

  public on(key: string): Observable<T> {
    return this._eventBus.asObservable()
      .pipe(
        filter((event: BroadcastEvent<T>) => event.key === key),
        map((event: BroadcastEvent<T>) => <T>event.data)
      );
  }
}
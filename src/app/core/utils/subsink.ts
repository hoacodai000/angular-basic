
const isFunction: (fn: any) => boolean = (fn: any) => typeof fn === 'function';

export interface SubscriptionLike {
  unsubscribe(): void;
}

export class SubSink {
  private _subs: SubscriptionLike[] = [];

  public add(...subscriptions: SubscriptionLike[]): void {
    this._subs = this._subs.concat(subscriptions);
  }

  set sink(subscription: SubscriptionLike) {
    this._subs.push(subscription);
  }

  public unsubscribe(): void {
    this._subs.forEach((sub: SubscriptionLike) => sub && isFunction(sub.unsubscribe) && sub.unsubscribe());
    this._subs = [];
  }
}

/**
 * "takeUntil"
 *
 * import { Subject } from 'rxjs’;
 * import { takeUntil } from 'rxjs/operators'
 * private readonly onDestroy$: Subject<void> = new Subject<void>()
 *
 * "takeUntil" after operators
 * (api).pipe(takeUntil(this.onDestroy$)).subscribe()
 *
 * public ngOnDestroy(): void {
 *   this.onDestroy$.next();
 *   this.onDestroy$.complete();
 * }
 *
 */
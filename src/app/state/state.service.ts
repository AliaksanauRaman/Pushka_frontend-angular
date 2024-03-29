import { BehaviorSubject } from 'rxjs';

export abstract class StateService<T> {
  private readonly _stream$ = new BehaviorSubject<T>(this.getDefaultValue());
  public readonly stream$ = this._stream$.asObservable();

  public abstract getStateName(): string;
  public abstract getDefaultValue(): T;

  public get(): T {
    return this._stream$.getValue();
  }

  public set(value: T): void {
    this._stream$.next(value);
  }
}

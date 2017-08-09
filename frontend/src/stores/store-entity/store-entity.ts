import { EventEmitter } from "@angular/core";
import { Observable, Observer, Subscription } from "rxjs";

export interface IStoreEntity<TValue> {
    getCurrentValue(): TValue;

    setValue(value: TValue): void;

    subscribe(
        next?: (value: TValue) => void,
        error?: (error: any) => void,
        complete?: () => void
    ): Subscription;
}


export class StoreEntity<TValue> implements IStoreEntity<TValue> {

    private readonly changeEmitter = new EventEmitter<TValue>();
    private value: TValue;

    public setValue(value: TValue): void {
        this.value = value;
        this.changeEmitter.emit(this.value);
    }

    public getCurrentValue(): TValue {
        return this.value;
    }

    public subscribe(next?: (value: TValue) => void, error?: (error: any) => void, complete?: () => void): Subscription {
        return this.changeEmitter.subscribe(next, error, complete);
    }

}
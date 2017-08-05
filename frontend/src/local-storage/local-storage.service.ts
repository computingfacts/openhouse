import { Injectable } from "@angular/core";
import { IStoreEntity } from "../stores/store-entity/store-entity";

@Injectable()
export class LocalStorageService {

    public registerStoreEntity<TValue>(storageKey: ELocalStorageKeys, storeEntity: IStoreEntity<TValue>): void {
        this.initialiseStoreEntity(storageKey, storeEntity);    
        storeEntity.subscribe(value => localStorage.setItem(ELocalStorageKeys[storageKey], JSON.stringify(value)));
    }

    public initialiseStoreEntity<TValue>(storageKey: ELocalStorageKeys, storeEntity: IStoreEntity<TValue>): void {
        storeEntity.setValue(this.getItem<TValue>(storageKey));
    }   

    public getItem<TValue>(key: ELocalStorageKeys): TValue {
        const valueString = localStorage.getItem(ELocalStorageKeys[key]);
        if (valueString == null || valueString === "") {
            return null;
        }
        return JSON.parse(valueString);
    }

}

export enum ELocalStorageKeys {
    ActiveUser,
}
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class BaseMenuService {

    private activeKey: string = null;
    private subject = new Subject<string>();

    public get activeTabChangeEmitter(): Observable<string> {
        return this.subject;
    }

    public get currentTab(): string {
        return this.activeKey;
    }

    public activateTab(itemKey: string): void {
        if (itemKey == null || itemKey === "") {
            return;
        }

        this.updateValue(itemKey);
    }

    public closeTab(itemKey: string): void {
        if (itemKey == null || itemKey === "" || this.activeKey !== itemKey) {
            return;
        }

        this.updateValue(null);
    }

    private updateValue(itemKey: string): void {
        this.activeKey = itemKey;
        this.subject.next(itemKey);
    }

}
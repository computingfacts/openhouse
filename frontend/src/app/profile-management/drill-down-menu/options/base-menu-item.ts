import { Component, OnInit, OnDestroy } from "@angular/core";
import { BaseMenuService } from "./base-menu.service";

export interface IDrillDownMenuItemComponentDefinitionOptions {
    itemKey: string;
    selector: string;
    title: string;
    iconClass: string;
    openTemplate: string;
}

export class DrillDownMenuItemComponentDefinition {

    public static create(options: IDrillDownMenuItemComponentDefinitionOptions): Component {
        const instance = new DrillDownMenuItemComponentDefinition();

        return {
            selector: options.selector,
            template: instance.buildTemplate(options),
            styleUrls: ["./base-menu-item.style.css"]
        }
    }

    private constructor() { }

    private buildTemplate(options: IDrillDownMenuItemComponentDefinitionOptions): string {
        return `
            ${this.buildClosedMenuTemplate(options.itemKey, options.iconClass, options.title)}
            ${this.buildOpenMenuTemplate(options.openTemplate)}
        `;
    }

    private buildClosedMenuTemplate(key: string, icon: string, title: string): string {
        return `
            <div class="drill-down-menu-item" (click)="openItem(${key})" *ngIf="showMenuItem">
                <span class="icon ${icon}"></span>
                <span class="label">${title}</span>
            </div>
        `;
    }

    private buildOpenMenuTemplate(template: string): string {
        return `
            <div class="drill-down-menu-content" *ngIf="showContent">
                <div class="back-to-menu" (click)="closeItem()">
                    <i class="icon fa fa-arrow-left"></i>
                    <span i18n="@@back">Back</span>
                </div>

                ${template}
            </div>
        `;
    }

}

export abstract class ABaseMenuItem implements OnInit {

    private showMenuItem = false;
    private showContent = false;

    protected constructor(
        private readonly menuService: BaseMenuService
    ) { }

    public ngOnInit(): void {
        this.updateActive(this.menuService.currentTab);

        this.menuService.activeTabChangeEmitter
            .subscribe(this.updateActive.bind(this));
    }

    private updateActive(currentTabKey: string): void {
        this.showMenuItem = currentTabKey === null;
        this.showContent = currentTabKey === this.getItemKey();
    }

    protected abstract getItemKey(): string;

    public openItem(): void {
        this.menuService.activateTab(this.getItemKey());
    }

    public openAnotherItem(itemKey: string): void {
        this.menuService.activateTab(itemKey);
    }

    public closeItem(): void {
        this.menuService.closeTab(this.getItemKey());
    }

    public isOtherActive(): boolean {
        return false;
    }

}
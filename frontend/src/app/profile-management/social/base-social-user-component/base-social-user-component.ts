import { Component, AfterViewInit, OnInit } from "@angular/core";
import { AppInitialiserService } from "../../../app-initialiser.service";

export class BaseSocialUserComponent implements Component {

    public static create(client: string, colour: string, initMethod?: () => void): Component {
        if (initMethod != null) {
            AppInitialiserService.registerInitialiser(initMethod);
        }

        const instance = new BaseSocialUserComponent(client, colour);

        return {
            selector: instance.selector,
            template: instance.template,
            styles: instance.styles
        };
    }

    private constructor(
        private readonly client: string,
        private readonly colour: string
    ) { }

    public get selector(): string {
        return `cf-${this.client}-auth`;
    }

    public get template(): string {
        return `
            <button #${this.client}Auth (click)="onClick()" class="btn btn-primary ${this.client}" [disabled]="spinning">
                <cf-spinner *ngIf="spinning"></cf-spinner>
                <cf-${this.client}-auth-icon *ngIf="!spinning" class="icon"></cf-${this.client}-auth-icon>
                <span class="title" *ngIf="!spinning">${this.getDisplayName()}</span>
            </button>
        `;
    }

    public get styles(): string[] {
        return [
            `.btn.btn-primary {
                border-radius: 0;
                float: right;
                cursor: pointer;
                flex: 1
            }`,

            `.icon { margin: 0 0.2rem; }`,

            `${this.client}: {
                background-color: ${this.colour};
                border-color: ${this.colour};
            }`
        ];
    }

    private getDisplayName(): string {
        return this.client.charAt(0).toUpperCase() + this.client.slice(1).toLowerCase();
    }

}

export abstract class ABaseSocialComponentController implements OnInit, AfterViewInit {

    public spinning = false;

    public abstract ngAfterViewInit(): void;
    public abstract onClick(): void;

    public ngOnInit(): void {
        this.spinning = true;
    }
}
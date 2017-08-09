import { Component, OnInit } from "@angular/core";
import { AppInitialiserService } from "./app-initialiser.service";

@Component({
    selector: "cf-app",
    templateUrl: "./app.template.html",
    styleUrls: ["./app.style.css"]
})
export class AppComponent implements OnInit {

    constructor (
        private readonly initialiser: AppInitialiserService
    ) {}

    public ngOnInit(): void {
        this.initialiser.initialise();
    }

}
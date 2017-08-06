import { Injectable } from "@angular/core";

@Injectable()
export class AppInitialiserService {

    private static initialisers: (() => void)[] = [];

    public static registerInitialiser(init: () => void) {
        AppInitialiserService.initialisers.push(init);
    }

    public initialise(): void {
        AppInitialiserService.initialisers.forEach(init => init());
        AppInitialiserService.initialisers = [];
    }
}
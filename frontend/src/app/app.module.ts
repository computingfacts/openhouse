import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";

import { NavBarModule } from "./nav-bar/nav-bar.module";
import { RecipeBrowseModule } from "./recipe-browse/recipe-browse.module";

import { SocialAuthModule } from "./profile-management/social/social.module";
import { AppInitialiserService } from "./app-initialiser.service";

@NgModule({
  imports: [
    BrowserModule,
    NavBarModule,
    RecipeBrowseModule,
  ],

  declarations: [
    AppComponent,
  ],

  providers: [
    AppInitialiserService,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

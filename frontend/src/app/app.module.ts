import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";

import { NavBarModule } from "./nav-bar/nav-bar.module";
import { RecipeBrowseModule } from "./recipe-browse/recipe-browse.module";

@NgModule({
  imports: [
    BrowserModule,
    NavBarModule,
    RecipeBrowseModule,
  ],

  declarations: [
    AppComponent,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

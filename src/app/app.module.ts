import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardOne } from "./card.componentOne";
import { CardTwo } from "./card.componentTwo";

@NgModule({
  declarations: [
    AppComponent,
    CardOne,
    CardTwo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

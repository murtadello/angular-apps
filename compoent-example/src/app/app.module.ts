import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    TwowaydatabindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

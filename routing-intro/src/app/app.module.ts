import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettinsConatactComponent } from './settins-conatact/settins-conatact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    SettingsProfileComponent,
    SettinsConatactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

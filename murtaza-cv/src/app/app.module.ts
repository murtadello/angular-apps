import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AboutmeComponent } from './aboutme/aboutme.component';

import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

import {HttpClientModule} from "@angular/common/http";
import { GalleryComponent } from './gallery/gallery.component';
import { FormComponent } from './form/form.component';
import { SkillsComponent } from './skills/skills.component';
import { TechnicalComponent } from './technical/technical.component';
import { HobbyComponent } from './hobby/hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ServiceComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    FormComponent,
    SkillsComponent,
    TechnicalComponent,
    HobbyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, NgbModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

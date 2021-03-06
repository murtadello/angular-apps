import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { GalleryComponent } from './gallery/gallery.component';
import { FormComponent } from './form/form.component';
import { SkillsComponent } from './skills/skills.component';
import { TechnicalComponent } from './technical/technical.component';
import { HobbyComponent } from './hobby/hobby.component';
import { CardComponent } from './card/card.component';
import { BeitragComponent } from './beitrag/beitrag.component';
import { BusinessComponent } from './business/business.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/app.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

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
    CardComponent,
    BeitragComponent,
    BusinessComponent,
    AnimationComponent,
    MyCounterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    NgbModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }


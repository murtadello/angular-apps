import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MacbookComponent } from './components/macbook/macbook.component';
import { HtmlComponent } from './components/html/html.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { AngularComponent } from './components/angular/angular.component';
import { JavaComponent } from './components/java/java.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MacbookComponent,
    HtmlComponent,
    YoutubeComponent,
    AngularComponent,
    JavaComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

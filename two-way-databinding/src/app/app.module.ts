import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { ViewComponentComponent } from './view/view-component/view-component.component';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule
    
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

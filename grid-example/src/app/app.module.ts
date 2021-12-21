import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { PagelayoutComponent } from './pagelayout/pagelayout.component';
import { EasyteachComponent } from './easyteach/easyteach.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PagelayoutComponent,
    EasyteachComponent,
    TodoComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

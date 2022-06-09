import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const dbConfig: DBConfig = {
  name: 'coolDB',
  version: 1,
  objectStoresMeta: [{
    store: 'coolTable',
    storeConfig: {keyPath: 'id', autoIncrement: true},
    storeSchema: [
      {name: 'first_name', keypath: 'first_name', options: { unique: false}},
      {name: 'last_name', keypath: 'last_name', options: { unique: false}},
      {name: 'profile_photo', keypath: 'profile_photo', options: { unique: false}},
      {name: 'email', keypath: 'email', options: { unique: true}}
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

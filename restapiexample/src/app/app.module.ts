import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserdetailComponent } from './userdetail/userdetail.component';


import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
@NgModule({
declarations: [
  AppComponent,
  UserListComponent,
  UserdetailComponent,
  
],
imports: [
  
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
 
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
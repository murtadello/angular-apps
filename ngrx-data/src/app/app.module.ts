import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { PostsDataService } from './posts/posts-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    SinglePostComponent,
    EditPostComponent,
    AddPostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      logOnly:environment.production
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [PostsDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    entityDataService: EntityDataService,
    PostsDataService: PostsDataService
  ){
    entityDataService.registerService('Post', PostsDataService);
  }
 }

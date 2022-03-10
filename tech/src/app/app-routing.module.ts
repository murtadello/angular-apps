import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { HomeComponent } from './components/home/home.component';
import { HtmlComponent } from './components/html/html.component';
import { JavaComponent } from './components/java/java.component';
import { MacbookComponent } from './components/macbook/macbook.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'html', component: HtmlComponent},
  {path: 'java', component: JavaComponent},
  {path: 'angular', component: AngularComponent},
  {path: 'macbook', component: MacbookComponent},
  {path: 'youtube', component: YoutubeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

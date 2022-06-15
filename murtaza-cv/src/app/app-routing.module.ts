import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BeitragComponent } from './beitrag/beitrag.component';
import { BusinessComponent } from './business/business.component';
import { componentFactoryName } from '@angular/compiler';
import { AnimationComponent } from './animation/animation.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutmeComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'travel', component: BeitragComponent},
  {path: 'contact', component: ContactComponent},
  {path:'animation', component: AnimationComponent},
  {path:'counter', component: MyCounterComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

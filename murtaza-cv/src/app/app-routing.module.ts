import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutmeComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'contact', component: ContactComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

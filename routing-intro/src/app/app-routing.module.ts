import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettinsConatactComponent } from './settins-conatact/settins-conatact.component';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {
    path: 'settings' , 
    component: SettingsComponent,
    children:[
      {path:'profile', component:SettingsProfileComponent},
      {path:'contact', component:SettinsConatactComponent},
      {path: '**', redirectTo:'profile', pathMatch: 'full'}
    ]
  },
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




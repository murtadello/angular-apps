import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path:'users/:id', component: UserdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

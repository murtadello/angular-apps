import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles/roles.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  {path: '', component: ListUsersComponent},
  {path: 'users', component: ListUsersComponent},
  {path: 'roles', component: RolesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

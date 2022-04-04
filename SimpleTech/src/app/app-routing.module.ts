import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Route } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { EditComponentComponent } from './contacts/edit-component/edit-component.component';
import { LoansComponent } from './loans/loans.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';
import { AdminGuard } from './admin.guard';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminAcGuard } from './admin-ac.guard';
import { FormsComponent } from './forms/forms.component';
import { ReactivformsComponent } from './reactivforms/reactivforms.component';

const routes : Routes = [
  {path:'loans', component:LoansComponent, canActivate: [AdminGuard]},
  {path:'profile', component: ListProfileComponent},
  {path:'forms', component: FormsComponent},
  {path:'reactive', component: ReactivformsComponent},
  {path:'admin', 
  canActivate: [SuperAdminGuard],
  canActivateChild: [AdminAcGuard],
  children: [
    {
      path:'',
      component: AdminComponent, 
    },
    {path:'manage', component: AdminManageComponent},
    {path:'edit', component: AdminEditComponent},
    {path:'delete', component: AdminDeleteComponent}
  ]
}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

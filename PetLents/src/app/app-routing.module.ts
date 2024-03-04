import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApointmentRegistrationComponent } from './apointment-registration/apointment-registration.component';
import { ApointmentListComponent } from './apointment-list/apointment-list.component';
import { ApointmentEditComponent } from './apointment-edit/apointment-edit.component';
import { ApointmentDetailComponent } from './apointment-detail/apointment-detail.component';

const routes: Routes = [
  { path: 'register', component: ApointmentRegistrationComponent },
  { path: 'list', component: ApointmentListComponent },
  { path: 'edit/:id', component: ApointmentEditComponent },
  { path: 'detail/:id', component: ApointmentDetailComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

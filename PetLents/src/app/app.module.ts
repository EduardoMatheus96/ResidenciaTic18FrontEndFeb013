import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApointmentDetailComponent } from './apointment-detail/apointment-detail.component';
import { ApointmentEditComponent } from './apointment-edit/apointment-edit.component';
import { ApointmentListComponent } from './apointment-list/apointment-list.component';
import { ApointmentRegistrationComponent } from './apointment-registration/apointment-registration.component';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ApointmentDetailComponent,
    ApointmentEditComponent,
    ApointmentListComponent,
    ApointmentRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

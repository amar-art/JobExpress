import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ErreurComponent } from './erreur/erreur.component';
import {   HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListcandidatsComponent } from './listcandidats/listcandidats.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetaillecandidatComponent } from './detaillecandidat/detaillecandidat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProfilComponent } from './profil/profil.component';
import { OffreComponent } from './offre/offre.component';
import { NewOffreComponent } from './new-offre/new-offre.component';
import { CandidatPipe } from './pipes/candidat.pipe';
import { ContactComponent } from './contact/contact.component';
import { EventsModule } from 'angular4-events';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ErreurComponent,
    ListcandidatsComponent,
    DetaillecandidatComponent,
    ProfilComponent,
    OffreComponent,
    NewOffreComponent,
    CandidatPipe,
    ContactComponent,







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ModalModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    EventsModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

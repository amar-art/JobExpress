import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { DetaillecandidatComponent } from './detaillecandidat/detaillecandidat.component';

import { ErreurComponent } from './erreur/erreur.component';
import { HomeComponent } from './home/home.component';
import { ListcandidatsComponent } from './listcandidats/listcandidats.component';
import { LoginComponent } from './login/login.component';
import { NewOffreComponent } from './new-offre/new-offre.component';
import { OffreComponent } from './offre/offre.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"home" ,component:HomeComponent,children:[
    {path:'',component:BodyComponent},
    {path:"login" ,component:LoginComponent},
    {path:"candidates",component:ListcandidatsComponent,canActivate:[AuthGuard]},
    {path:'candidat/:id', component:DetaillecandidatComponent},
    {path:"offre", component:OffreComponent},
    {path:"new-offre" , component:NewOffreComponent},
    {path:"contact" , component:ContactComponent},
    {path:"profile",component:ProfilComponent},
  ]},
 
  
  {path:'',redirectTo:'/home',pathMatch:'full'},



  {path:"**" , component:ErreurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

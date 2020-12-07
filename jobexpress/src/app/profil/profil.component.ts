import { Component, OnInit } from '@angular/core';
import { EventsService } from 'angular4-events';
import { UserService } from 'Nouveau dossier/src/app/services/user.service';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private authservice :AuthentificationService,private events: EventsService) { }
  public user;

  ngOnInit(): void {
  this.getprofi();
  }



  getprofi(){

    this.authservice.getprofile().subscribe((res:any)=>{
      this.user=res;
    console.log(res)

   })
   }
  
   deconnect(){
     localStorage.clear();
     this.events.publish('state', '0');

  }
  
}

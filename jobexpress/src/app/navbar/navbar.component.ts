import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'angular4-events';
import { AuthentificationService } from '../services/authentification.service';
//import {LoginComponent} from  './login/login.component.ts';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isadmin: boolean;
  isuser:boolean;

  state = false;


  constructor(private authservice: AuthentificationService, private events: EventsService, private router: Router) { }


   
  ngOnInit(): void {
     
    this.isadmin=this.authservice.isAdmin
    this.isuser=this.authservice.isUser
    console.log(this.isadmin)

    this.events.subscribe('state').subscribe((from) => {

      console.log("from ",from )
      if(from=="1")
      this.state = true;
      else
      this.state = false;
    });

  }

  isConnect() {
    return localStorage.getItem('tocken');
    //this.router.navigate(['/profile'])

  }
   


}

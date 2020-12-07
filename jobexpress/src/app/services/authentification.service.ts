import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService implements OnInit{

isAdmin:boolean  =false
isUser:boolean =false
jwt: string
role: string
//roles : Array<string>
username: string

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
     // this.parseJwt()
  }

  login(data){
    return this.http.post(environment.url+'/login',data,{observe:'response'})
  }
  save(data){
    return this.http.post(environment.url+'/candidat/save',data)
  }
  getprofile() {
    let headers = new HttpHeaders({'authorization': 'Bearer ' +localStorage.getItem('tocken')});
  
    return this.http.get(environment.url + '/getprofile', {headers: headers});
  }

   garderToken(jwt: string){
      localStorage.setItem('tocken',jwt)
      this.jwt=jwt;
      this.parseJwt();



   }

  parseJwt(){

    let jwthelper=new JwtHelperService();
    this.role=jwthelper.decodeToken(this.jwt).nomRole;

    console.log(this.role);
    //this.roles=jwthelper.decodeToken(this.jwt).roles;
  }

 /* isAdmin(){
     if (this.role=="admin")
       return true;
     

    }

  isUser(){

    if (this.role=='candidat')
       return true;
   
  }*/
}

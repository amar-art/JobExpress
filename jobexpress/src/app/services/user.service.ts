import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post(environment.url+'/login',data,{observe:'response'})
  }
  save(data){
    return this.http.post(environment.url+'/candidat/save',data)
  }
 
}

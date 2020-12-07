import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }


  saveOffre1(data,id){
    let headers = new HttpHeaders({'authorization': 'Bearer ' +localStorage.getItem('tocken')});
     return this.http.post(environment.url+'/offre/save/'+id,data, {headers: headers});


  }
  getalltest(){
    let headers = new HttpHeaders({'authorization': 'Bearer ' +localStorage.getItem('tocken')});
   return this.http.get(environment.url+'/test/all', {headers: headers})
  }

  getalloffres(){
    let headers = new HttpHeaders({'authorization': 'Bearer ' +localStorage.getItem('tocken')});
     return this.http.get(environment.url+'/offre/all',{headers: headers})
  }
}

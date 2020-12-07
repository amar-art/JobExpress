import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http:HttpClient) { }

  getAll(page:number,size:number){
     return this.http.get(environment.url+"/candidat/getall?page="+page+"&size="+size)
   }

   delete(id){

    return this.http.delete(environment.url+'/candidat/delete/'+id)
  }
   
   getCandidat(id:any){
      
     return this.http.get(environment.url+'/candidat/get/'+id)
   }
   updateCandidat(id,data){

    return this.http.put(environment.url+'/candidat/update'+id,data)
   }

  
  /*loadCandidat() {

    return this.selected;

  }*/
}

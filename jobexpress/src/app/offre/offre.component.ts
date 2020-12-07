import { Component, OnInit } from '@angular/core';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  constructor(private serviceoffre:OffreService) { }

 public data:any;
   
  ngOnInit(): void {

    this.getoffres()
  }


   getoffres(){
     
    this.serviceoffre.getalloffres().subscribe(res=>{
          
    this.data=res;

    })
       
   }
}

import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-new-offre',
  templateUrl: './new-offre.component.html',
  styleUrls: ['./new-offre.component.css']
})
export class NewOffreComponent implements OnInit {

  tests;
  offreForm:FormGroup
  
  constructor(private formBuilder:FormBuilder,private offreservice:OffreService) { }

  ngOnInit(): void {

    
  this.offreForm = this.formBuilder.group({
 
    nom: ['', Validators.required],
    type: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
    test: ['', Validators.required],
  

});
this.getAll();
}
getAll(){

  this.offreservice.getalltest().subscribe(res=>{
 
    this.tests=res
    console.log(this.tests)

  })
 }

addoffre(){
  const data={ nom:this.offreForm.value.nom,
               type:this.offreForm.value.type,
               description:this.offreForm.value.description,
               date:this.offreForm.value.date,
  }
  console.log(data,this.offreForm.value.test)
   this.offreservice.saveOffre1(data,this.offreForm.value.test).subscribe(res=>{
     console.log("ok!!!!");
   })
 
}
 

}
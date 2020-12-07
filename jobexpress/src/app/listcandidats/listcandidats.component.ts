import { Component, OnInit, TemplateRef } from '@angular/core';
import { CandidatService } from '../services/candidat.service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Candidat } from '../model/candidat';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listcandidats',
  templateUrl: './listcandidats.component.html',
  styleUrls: ['./listcandidats.component.css']
})
export class ListcandidatsComponent implements OnInit {

  constructor(private sevicecandidat:CandidatService,private modalService: BsModalService,private  formBuilder: FormBuilder) { }
   
  term;
  p: number = 1;
   modalRef: BsModalRef;
  public idCand:any;
  public candidat:any;
  public size:number=5
  public currentpage: number=0 
  candidatForm:FormGroup
  fileToupload : File=null
    candidat1= new Candidat();

  ngOnInit(): void {
    this.getAlls();
    this.candidatForm=this.formBuilder.group({
 
      nom:[''],
      prenom:[''],
      username:[''],
      email:[''],
      addres:[''],
     
      password:[''],
      confirmPassword:[''],
     typecandidat:[''],
      cv :[''],
    })
  }
  
  
 public getAlls(){
    this.sevicecandidat.getAll(this.currentpage,this.size).subscribe(res=>{
      console.log(res);
     this.candidat=res;
  
    })
  }
  deleteCandidat(idCand){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

    this.sevicecandidat.delete(idCand).subscribe(data => {
      //this.loadCandidat();
      this.candidat=data;

      this.getAlls()
      });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  loadCandidat(id,nom,prenom,login,addres,email,cv,type){

          this.candidat1.id=id
          this.candidat1.nom=nom
          this.candidat1.prenom=prenom
          this.candidat1.login=login
          this.candidat1.addres=addres
          this.candidat1.email=email
          this.candidat1.type=type
          this.candidat1.cv=cv

  }
  addCandiat(){
 
    const formdata=new FormData();

    formdata.append('nom',this.candidatForm.value.nom)
    formdata.append('prenom',this.candidatForm.value.prenom)
  
    formdata.append('email',this.candidatForm.value.email)
    formdata.append('addres',this.candidatForm.value.addres)
   
    
    formdata.append('file',this.fileToupload)
    formdata.append('type',this.candidatForm.value.typecandidat)
   //  formdata.append('type',this.candidatForm.value.typecandidat)
     console.log(this.candidatForm.value)
   this.sevicecandidat.updateCandidat(this.candidat.id,formdata).subscribe(res=>{

     console.log(res);
   })
 }
}

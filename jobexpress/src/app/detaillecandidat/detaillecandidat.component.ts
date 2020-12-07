import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';


@Component({
  selector: 'app-detaillecandidat',
  templateUrl: './detaillecandidat.component.html',
  styleUrls: ['./detaillecandidat.component.css']
})
export class DetaillecandidatComponent implements OnInit {

  public candidat:Object;
  //public idcand:any;
  constructor( private candidatservice:CandidatService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.route.params.subscribe( params => console.log(params));
    let idcand=this.route.snapshot.paramMap.get('id')
     console.log(idcand)
    this.candidatservice.getCandidat(idcand).subscribe(data => {
   
      console.log(data)
      this.candidat=data});
      console.log(this.candidat)
  }
     
}

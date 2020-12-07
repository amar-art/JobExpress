import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

import { AuthentificationService } from '../services/authentification.service';
import { EventsService } from 'angular4-events';
import jwt_decode from "jwt-decode";


//import {Swal} from 'sweetalert2/dist/sweetalert2.js';

//import{Swal} 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public roleAdmin ;
 // decoded:any ;
 public etat :number
  submitted = false
  registerForm: FormGroup
  candidatForm: FormGroup
  fileToupload: File = null
  constructor(private formBuilder: FormBuilder, private events: EventsService, private service: UserService, private router: Router, private auth: AuthentificationService) { }

  ngOnInit() {
  
  
   
       
 

    this.registerForm = this.formBuilder.group({

      login: ['', Validators.required],

      password: ['', [Validators.required, Validators.minLength(6)]],


    });
    this.candidatForm = this.formBuilder.group({

      nom: [''],
      prenom: [''],
      username: [''],
      email: [''],
      addres: [''],

      password: [''],
      confirmPassword: [''],
      typecandidat: [''],
      cv: [''],


    })
  
  }

  handleFileInput(files: FileList) {

    this.fileToupload = files.item(0)
    console.log(this.fileToupload);
  }

  // convenience getter for easy access to form fields
  get g() { return this.registerForm.controls; }

  get f() { return this.candidatForm.controls; }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.service.login(this.registerForm.value).subscribe((res: any) => {
      console.log(res);

      const jwt = res.headers.get('Authorization')
       var decoded = jwt_decode(jwt);
      console.log(decoded['roles'][0]);

     if (decoded['roles']=='admin'){
           this.auth.isAdmin=true;
      }else {  if(decoded['roles']=='candidat')
            this.auth.isUser=true;    
          }
       
      this.events.publish('state', '1');
  
     
      
        localStorage.setItem('tocken',jwt)
         this.router.navigate(['/home'])
    }
      , error => {
        Swal.fire({
          icon: 'error',
          title: 'Login or Password undifined',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })

      })
     // this.isRoleAdmin();
  }
   /* isRoleAdmin(){

      //console.log('decoder value'+this.decoded['roles']=='admin')

      return this.decoded['roles']=='admin'
     
      
    }
    isRoleUser(){
 
  return this.decoded['roles']=='candidat';

       }*/
  addCandiat() {

    const formdata = new FormData();

    formdata.append('nom', this.candidatForm.value.nom)
    formdata.append('prenom', this.candidatForm.value.prenom)
    formdata.append('login', this.candidatForm.value.username)
    formdata.append('email', this.candidatForm.value.email)
    formdata.append('addres', this.candidatForm.value.addres)
    formdata.append('password', this.candidatForm.value.password)


    formdata.append('type', this.candidatForm.value.typecandidat)
    formdata.append('file', this.fileToupload)
    //  formdata.append('type',this.candidatForm.value.typecandidat)
    // console.log(this.candidatForm.value)
    this.service.save(formdata).subscribe(res => {

      console.log(res);


      const data = {
        login: this.candidatForm.value.username,
        password: this.candidatForm.value.password
      }
      console.log(data)
      this.service.login(data).subscribe((res1: any) => {
        console.log(res1);

        const jwt = res1.headers.get('Authorization')
        // console.log(jwt);

        this.events.publish('state', '1');

        this.auth.garderToken(jwt);

        // localStorage.setItem('tocken',jwt)
      })

      this.router.navigate(['/profile'])

    }
    )
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }


  }
  changeGender(e) {
    //return e.target.value
    console.log(e.target.value);
  }




}

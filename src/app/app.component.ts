import { Component } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm:FormGroup;
  submitFlag:boolean=false; //to know wheather button is clicked or not
  constructor(private fb:FormBuilder){
    this.registrationForm = this.fb.group({
      firstName:['',Validators.required], 
      lastName:['',Validators.required],
      phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      email:['',[Validators.required,Validators.email]]
    })
  }

  get f(){
    return this.registrationForm.controls;
  }

  onSubmit(){
    this.submitFlag=true;
    console.log('f',this.f)
  }
  




  // registrationForm = new FormGroup({
  //   userName : new FormControl('Athul'),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalCode : new FormControl('')
  //   })
  //})


  // loadApiData(){
  //   this.registrationForm.setValue({
  //     userName : 'Bruce',
  //     password : 'abcd',
  //     confirmPassword :'abcd', 
  //     address : {
  //       city : 'city',
  //       state: 'state',
  //       postalCode: '123456'
  //   }
  //   })
  // }
} 

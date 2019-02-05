import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
images:any=[];
mainForm;
  constructor(private fb:FormBuilder) {
    
   }
  ngOnInit(){  
    this.mainForm=this.fb.group({
      firstname:[''],
      lastname:[''],
      password:[''],
      email:[''],
      phone:['']
    })
  } 
  onSubmit(){
   console.log(this.mainForm.value);
  }
  }

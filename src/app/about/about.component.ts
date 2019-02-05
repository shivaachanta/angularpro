import { Component, OnInit,  } from '@angular/core';
import { NewserviceService } from '../services/newservice.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private employeeservice:NewserviceService) { }
  images:any=[];
  ngOnInit() {
   this.employeeservice.getEmpolyees().subscribe((data:any)=>{
    this.images=data.message
   });
  }
}

import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../services/newservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  empolyee=[];
  constructor(private empolyeeservice:NewserviceService) { }
  
  ngOnInit() {
    
  }

}

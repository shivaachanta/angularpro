import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { AngularComponent } from "./angular/angular.component";
import { JavaComponent } from "./java/java.component";
import { WhatComponent } from "./what/what.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
@NgModule({
    declarations:[
        AboutComponent,
        AngularComponent,
        JavaComponent,
        WhatComponent,
       
    ],
    imports:[ 
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    exports:[CommonModule]
})
export class AboutModule{

}
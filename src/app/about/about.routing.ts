import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { WhatComponent } from "./what/what.component";
import { JavaComponent } from "./java/java.component";
import { AngularComponent } from "./angular/angular.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule,Routes } from "@angular/router";
const routes:Routes=[
    {
        path:"about",
        component:AboutComponent,  
     children:<any>[
    {
        path:"java", component:JavaComponent,
    },
    {
        path:"angular", component:AngularComponent,
    },
    {
        path:"what", component:WhatComponent,
    }
],
    }
];
@NgModule({
    declarations:[AboutComponent,
        WhatComponent,
        JavaComponent,
        AngularComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forRoot(routes),        
    ],
    exports: [RouterModule]
})
export class AboutroutingModule{

}
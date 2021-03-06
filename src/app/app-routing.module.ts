import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path:'home',component:HomeComponent
  },
{
  path:'about', component: AboutComponent
},
{
  path:'contactus', component: ContactusComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

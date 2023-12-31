import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'add-details',component:AdddetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

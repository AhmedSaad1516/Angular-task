import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsentFormMainComponent } from './consent-form-main/consent-form-main.component';

const routes: Routes = [
  {path:'',component:ConsentFormMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentFormRoutingModule { }

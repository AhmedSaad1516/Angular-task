import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,

    children: [
      {path:'', redirectTo:"consent-form",pathMatch:'full'},
      { path: 'consent-form', loadChildren: () => import('../layout/consent-form/consent-form.module').then(m => m.ConsentFormModule) },
      { path: 'home', loadChildren: () => import('../layout/home/home.module').then(m => m.HomeModule) },




      ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

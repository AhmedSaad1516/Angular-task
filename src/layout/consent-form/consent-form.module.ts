import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentFormRoutingModule } from './consent-form-routing.module';
import { ConsentFormMainComponent } from './consent-form-main/consent-form-main.component';
import { FormMainComponent } from './form-main/form-main.component';
import { SharedModule } from 'src/shared/shared.module';
import { CoreModule } from 'src/core/core.module';


@NgModule({
  declarations: [
    ConsentFormMainComponent,
    FormMainComponent
  ],
  imports: [
    CommonModule,
    ConsentFormRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class ConsentFormModule { }

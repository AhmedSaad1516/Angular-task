import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateComponent } from './translate/translate.component';
import { CoreModule } from 'src/core/core.module';

@NgModule({
  declarations: [

    TranslateComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
   ],
   exports: [
    TranslateComponent,
    TranslateModule
  ]
})
export class SharedModule { }

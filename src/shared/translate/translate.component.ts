import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageServiceService } from 'src/core/LanguageService/language-service.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent {
  lang: string = 'ar';

  constructor(
    private languageService: LanguageServiceService,
    private translate: TranslateService,
    private renderer: Renderer2
  ) { }
  ngOnInit(): void {
    this.lang = this.translate.currentLang || 'ar';
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang')!;
    }
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
    this.updateHtmlLangAttr();
    this.lang = this.languageService.getCurrentLang();
  }

  changeLanguage() {
    /*
    في هذه الحاله اذا كانت اللغه الحاليه هي العربيه سيقوم بتحوليها الي انجليزيه
    */
    const newLang = this.lang === 'ar' ? 'en' : 'ar';
    //   ثم يقم بتحميل الصفحه
    window.location.reload()


    //  ثم يقوم بحديث اللغه
    this.updateLanguage(newLang);

  }

  changeToEnglish() {
    if (this.lang === 'ar') {
      window.location.reload()
      this.updateLanguage('en');

    }
  }

  private updateLanguage(newLang: string) {
    localStorage.setItem('lang', newLang);
    this.lang = newLang;
    this.translate.setDefaultLang(newLang);
    this.translate.use(newLang);
    this.updateHtmlLangAttr();
  }

  private updateHtmlLangAttr() {
    // لتغير تجاه الصفحه من اليسار الي اليمين والعكس علي حسبب اللغه الحاليه
    const htmlTag = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
  }
}

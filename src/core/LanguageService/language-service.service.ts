import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {
  private currentLang = 'ar';

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  initializeLanguage() {
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang ? savedLang : this.currentLang;
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

  getCurrentLang() {
    return this.currentLang;
  }

  changeLanguage(lang: string) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

}

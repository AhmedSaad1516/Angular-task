import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {

  constructor() { }
  /*
للحفاظ على آخر قيمة تم ارسالها وستكون القيمه من نوع true أو false.
  */
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  startLoading() {
    /*
 بتحديث حاله الي true
     مما يعني أن حالة التحميل قد بدأت أو أن البيانات قيد التحميل

    */
    this.loadingSubject.next(true);
  }

  stopLoading() {
    //  مما يعني أن حالة التحميل قد توقفت أو أن البيانات قد تم تحميلها.
    this.loadingSubject.next(false);
  }
}

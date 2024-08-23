import { Component, Input } from '@angular/core';
import { LoadingServiceService } from '../../loading-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skeleton-loader-line',
  templateUrl: './skeleton-loader-line.component.html',
  styleUrls: ['./skeleton-loader-line.component.scss']
})
export class SkeletonLoaderLineComponent {
  progress: number = 0;
  isProgressActive: boolean = false;

  private loadingSubscription: Subscription = new Subscription();

  constructor(private loadingService: LoadingServiceService) {}

  ngOnInit() {
    this.loadingSubscription.add(
      this.loadingService.loading$.subscribe(isLoading => {
        this.isProgressActive = isLoading;
        if (isLoading) {
          this.startLoading();
        } else {
          this.stopLoading();
        }
      })
    );
  }

  ngOnDestroy() {
    //يتم تنفيذها عند انتهاء
    this.loadingSubscription.unsubscribe();
  }

  startLoading() {
    /*
 اولا يقوم بالبدأ التحميل
    */
  //   تعيين isProgressActive  إلى  true مما يعني أن التحميل نشط

    this.isProgressActive = true;
    // ان تحميل يبدأ من البدايه
    this.progress = 0;

    /*
    لتحديث التقدم كل 300 ميلي ثانية
    يضيف 10
     حتى يصل إلى 100
     عندما يصل progress إلى 100،
     يتم إيقاف
    */
    const interval = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(interval);
        this.isProgressActive = false;
      } else {
        this.progress += 10;
      }
    }, 300);
  }

  stopLoading() {
    //  لإيقاف عملية التحميل
    this.isProgressActive = false;
    // إعادة تعيين التقدم
    this.progress = 0;
  }
}

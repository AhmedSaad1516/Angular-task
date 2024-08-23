  import { Component } from '@angular/core';
  import { ServicesService } from '../servicesForm/services.service';
import { authorName, reviewerAgreed, reviewerName } from '../api-response';
import { Database } from 'src/app/class/database';

  @Component({
    selector: 'app-consent-form-main',
    templateUrl: './consent-form-main.component.html',
    styleUrls: ['./consent-form-main.component.scss']
  })
  export class ConsentFormMainComponent {
    data:any
    authors :authorName[]=[]
    reviewers:reviewerName[]=[]
    agreed:reviewerAgreed[]=[]
    constructor(private _Services:ServicesService){

    }

    statusOptions =Database.statusOptions

ngOnInit(){
  this.getDataAuthor()
  this.getDataReviewer()
  this.getDataAgreed()
}

// data return authors
     getDataAuthor(){
        this.authors=Database.authors

     }

     // end data return authors


          //  data return reviewer
     getDataReviewer(){
        this.reviewers=Database.reviewers

     }

          // end data return reviewer

          //  data return agreed
     getDataAgreed(){
        this.agreed=Database.agreed
     }

     // end data return agreed



     finishFormSubmission(formData: any) {
        Database.createDataSet[0].author = formData.author || Database.createDataSet[0].author;
        Database.createDataSet[0].reviewer = formData.reviewer || Database.createDataSet[0].reviewer;
        Database.createDataSet[0].status = formData.status || Database.createDataSet[0].status;
        Database.createDataSet[0].agreed = formData.agreed || Database.createDataSet[0].agreed;
        Database.createDataSet[0].start_date = formData.start_date || Database.createDataSet[0].start_date;
        Database.createDataSet[0].end_date = formData.end_date || Database.createDataSet[0].end_date;
    }

  }


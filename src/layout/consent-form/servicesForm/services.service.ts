import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authorName, createData, reviewerAgreed, reviewerName } from '../api-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // In order to save the data when you return to it again

  private draftSubject = new BehaviorSubject<any>(null);
  draft$ = this.draftSubject.asObservable();
  // In order to save the data when you return to it again

  constructor(private http: HttpClient) { }

  getAllDataAuthor(): Observable<authorName> {
    return this.http.get<authorName>(environment.Api + "authors");
  }

  getAllDataReviewer(): Observable<reviewerName> {
    return this.http.get<reviewerName>(environment.Api + "reviewers");
  }

  getAllDataAgreed(): Observable<reviewerAgreed> {
    return this.http.get<reviewerAgreed>(environment.Api + "agreed");
  }
  
  // In order to save the data when you return to it again
  saveDraft(draftData: any) {
   return this.draftSubject.next(draftData);
  }
  // In order to save the data when you return to it again
  sendData(model:createData): Observable<createData>{
    return this.http.post<createData>(environment.Api + "createDataSet" ,model);
  }

}

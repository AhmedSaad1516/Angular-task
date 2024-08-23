import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { SweetAlertService } from 'src/shared/servicesSweetAlert/sweet-alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../servicesForm/services.service';
import { LoadingServiceService } from 'src/core/loading-service.service';


@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss'],
  providers: [DatePipe]

})
export class FormMainComponent {
  formSubmittedValue!:FormGroup
  @Input() showDataAuthor: { name: string }[] = [];
  @Input() showDataReviewer: { name: string }[] = [];
  @Input() showDataAgreed: { name: string }[] = [];
  @Input() status: { name: string }[] = [];
  @Output() formSubmitted = new EventEmitter<any>();
  selectedAuthor!: string
  selectedReviewer!: string
  selectedStatus!: string
  selectedAgreed!: string
  startDate!: Date
  endDate!: Date
  isLoading: boolean = false;


  constructor(private datePipe: DatePipe,
    private swalService: SweetAlertService,
    private _formBuilder :FormBuilder,
    private draftService:ServicesService,
    private loadingService: LoadingServiceService

  ) {

  }

  ngOnInit(){
    this.createFomeValue()
    this.loadDraft();
  }

  createFomeValue(){
    this.formSubmittedValue = this._formBuilder.group({
      author:["" ,Validators.required],
      reviewer:["" ,Validators.required],
      agreed:["" ,Validators.required],
       status: ["" ,Validators.required],
       start_date:  ["" ,Validators.required],
       end_date:  ["" ,Validators.required],
    })
  }
  saveAsDraft() {
    // Get original values
    const author = this.formSubmittedValue.get('author')?.value;
    const reviewer = this.formSubmittedValue.get('reviewer')?.value;
    const status = this.formSubmittedValue.get('status')?.value;
    const agreed = this.formSubmittedValue.get('agreed')?.value;
    const startDate = this.formSubmittedValue.get('start_date')?.value;
    const endDate = this.formSubmittedValue.get('end_date')?.value;

    //Check if there is research content on the data
    const hasData = author || reviewer || status || agreed || startDate || endDate;

    if (hasData) {
      // If there is data, save it as a draft

      const formData = {
        author,
        reviewer,
        status,
        agreed,
        startDate,
        endDate
      };

      this.isLoading = true; // Start loading


      // Use the service to save data in services
      this.draftService.saveDraft(formData);

      this.swalService.showFormDraftSave().then((result: any) => {
        this.loadingService.startLoading(); // Start loading function
        setTimeout(() => {
          this.isLoading = false;
          this.loadingService.stopLoading();
        }, 3000);

      });
    } else {
      // If all fields are empty


      this.swalService.showFormDraftInvalid().then((result: any) => {
        this.isLoading = false; // Stop loading
      });
    }
  }
  loadDraft() {
    // In order to retrieve data after saving it as a draft

    this.draftService.draft$.subscribe(draftData => {
      if (draftData) {
        this.formSubmittedValue.patchValue({
          author: draftData.author,
          reviewer: draftData.reviewer,
          agreed: draftData.agreed,
          status: draftData.status,
          start_date: draftData.startDate,
          end_date: draftData.endDate
        });

        this.selectedAuthor = draftData.author;
        this.selectedReviewer = draftData.reviewer;
        this.selectedStatus = draftData.status;
        this.selectedAgreed = draftData.agreed;
        this.startDate = draftData.startDate;
        this.endDate = draftData.endDate;
      }
    });
  }

  SendDate() {
    // If all fields are filled
    if (this.formSubmittedValue.valid) {
      const startDate = this.formSubmittedValue.get('start_date')?.value;
      const endDate = this.formSubmittedValue.get('end_date')?.value;

      // Correcting the format of sending the date so that it becomes dd/MM/yyyy
      const formattedStartDate = startDate ? this.datePipe.transform(startDate, 'dd/MM/yyyy') : null;
      const formattedEndDate = endDate ? this.datePipe.transform(endDate, 'dd/MM/yyyy') : null;
        //  Correcting the format of sending the date so that it becomes dd/MM/yyyy

      const formData = {
        author: this.formSubmittedValue.get('author')?.value,
        reviewer: this.formSubmittedValue.get('reviewer')?.value,
        status: this.formSubmittedValue.get('status')?.value,
        agreed: this.formSubmittedValue.get('agreed')?.value,
        startDate: formattedStartDate,
        endDate: formattedEndDate
      };

      this.isLoading = true; // Start loading

      // Show success message
      this.swalService.showFormSuccess().then((result: any) => {
        if (result.isConfirmed) {
          // It sends data via output
          this.formSubmitted.emit(formData);
           // It sends data via output

          //  In order to erase the data stored in it
          this.draftService.saveDraft(null);
                //  In order to erase the data stored in it

                // To clear data from fields
          this.formSubmittedValue.reset();
            // To clear data from fields

            // start loading function
          this.loadingService.startLoading();
    // start loading function

          setTimeout(() => {
            this.isLoading = false;
            this.loadingService.stopLoading();
          }, 3000);
        } else {
          this.isLoading = false;
        }
      }).catch(() => {
        this.isLoading = false;
      });

    } else {
      //  Handling errors if all fields are not completed

      this.swalService.showFormInvalid().then(() => {
        this.isLoading = false; //Stop downloading if the form is invalid
      });
    }
  }








  deleteConfirmation() {
    /* You must first make sure before
     pressing the cancel button that at least
      one field contains data in order
      to be able to click the cancel button.
      */
    const hasData =
    this.formSubmittedValue.get('author')?.value ||
    this.formSubmittedValue.get('reviewer')?.value ||
    this.formSubmittedValue.get('status')?.value ||
    this.formSubmittedValue.get('agreed')?.value ||
    this.formSubmittedValue.get('start_date')?.value ||
    this.formSubmittedValue.get('end_date')?.value;
     // If at least one field contains data
    if (hasData) {
      this.swalService.showConfirmation().then((result) => {
        if (result.isConfirmed) {
          //  If yes, select I want to cancel

               // To clear data from fields
               this.formSubmittedValue.reset();
               // To clear data from fields

            //  In order to erase the data stored in it
          this.draftService.saveDraft(null);
                //  In order to erase the data stored in it
        } else if (result.isDenied) {
          // Perform the action on cancellation
        }
      });
    } else {
      // If he presses and does not select data to delete it
      this.swalService.showConfirmationValid().then((result:any)=>{

      })
    }
  }

}

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor(private translate: TranslateService) { }

  showConfirmation() {
    // There is data in the field that the user wants to delete.
    return Swal.fire({
      // translate text
      title: this.translate.instant('sweetAlert.confirmation.title'),
      icon: 'error',
      html: this.translate.instant('sweetAlert.confirmation.text'),
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: this.translate.instant('sweetAlert.confirmation.confirmButtonText'),
      showDenyButton: true,
      denyButtonText: this.translate.instant('sweetAlert.confirmation.denyButtonText')
    });
  }

  showConfirmationValid() {
    // It appears when you click the Cancel button and there is no data in any field
    return Swal.fire({
      // translate text
      title: this.translate.instant('sweetAlert.confirmationValid.title'),
      text: this.translate.instant('sweetAlert.confirmationValid.text'),
      icon: "question",
      confirmButtonText: this.translate.instant('sweetAlert.formSuccess.confirmButtonText')

    });
  }

  showFormInvalid() {
    // If all fields are not complete

    // A sound appears when a message is displayed
    let audio = new Audio();
    audio.src = 'assets/notification-sound/error-2-126514.mp3';
    audio.load();
    audio.play();
       // A sound appears when a message is displayed
    return Swal.fire({
      icon: 'error',
      // translate text
      title: this.translate.instant('sweetAlert.formInvalid.title'),
      text: this.translate.instant('sweetAlert.formInvalid.text')
    });
  }

  showFormDraftInvalid() {
    // If you click Save as Draft and do not select data in at least one field


      // A sound appears when a message is displayed
    let audio = new Audio();
    audio.src = 'assets/notification-sound/error-2-126514.mp3';
    audio.load();
    audio.play();
    //   // A sound appears when a message is displayed
    return Swal.fire({
      icon: 'error',
           // translate text
      title: this.translate.instant('sweetAlert.formDraftSave.title'),
      text: this.translate.instant('sweetAlert.formDraftSave.text')
    });

  }

  showFormSuccess() {

    // If data was sent successfully

       // A sound appears when a message is displayed
    let audio = new Audio();
    audio.src = 'assets/notification-sound/error-2-126514.mp3';
    audio.load();
    audio.play();
       // A sound appears when a message is displayed

    return Swal.fire({
      icon: 'success',
           // translate text
      title: this.translate.instant('sweetAlert.formSuccess.title'),
      text: this.translate.instant('sweetAlert.formSuccess.text'),
      confirmButtonText: this.translate.instant('sweetAlert.formSuccess.confirmButtonText')
    });
  }

  showFormDraftSave() {
    // If the data is saved as a draft



    // A sound appears when a message is displayed
    let audio = new Audio();
    audio.src = 'assets/notification-sound/error-2-126514.mp3';
    audio.load();
    audio.play();
     // A sound appears when a message is displayed
    return Swal.fire({
      icon: 'success',
              // translate text
      title: this.translate.instant('sweetAlert.formDraft.title'),
      text: this.translate.instant('sweetAlert.formDraft.text'),
      confirmButtonText: this.translate.instant('sweetAlert.formDraft.confirmButtonText')
    });
  }
}

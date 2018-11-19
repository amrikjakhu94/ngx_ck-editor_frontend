import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  showSuccess(message,title) {
    this.toaster.success(message, title);
  }

  showError(message,title){
    this.toaster.error(message,title);
  }

  constructor(private toaster : ToastrService) { }
}

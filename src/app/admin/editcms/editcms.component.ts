import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterService } from '../../core/services/toaster.service';

@Component({
  selector: 'app-editcms',
  templateUrl: './editcms.component.html',
  styleUrls: ['./editcms.component.css']
})
export class EditcmsComponent implements OnInit {
  public editorValue: string = '<p>Demo data...</p>';
  pagedata: any;
  page_id: any;
  editCmsPageForm = this.fb.group({
    title: ['',Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])],
    description: ['',Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])]
  });

  sendEditorData(data){
    let title = data.title;
    let description = data.description;
    let content = this.editorValue;
    let editcmspagedata = { title : title, description : description, content : content }
    this.apiService.postEditCmsPageData(this.page_id,editcmspagedata).subscribe(
      res=>{
        this.toastrService.showSuccess(res.message,'Success');
      },
      err=>{
        this.toastrService.showError(err.error.message,'Error');
      }
    );
  }

  constructor(private apiService : ApiService,
              private fb : FormBuilder,
              private toastrService : ToasterService) { }

  ngOnInit() {
    this.apiService.getCmsData().subscribe(
      res => {
        this.pagedata = res;
        this.page_id = res._id;
        this.editorValue = this.pagedata.content;
        this.editCmsPageForm.patchValue(this.pagedata);
      }
    );
  }

}

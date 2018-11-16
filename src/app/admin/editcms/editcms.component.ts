import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    //console.log(this.editorValue,'data sent');
    let title = data.title;
    let description = data.description;
    let content = this.editorValue;
    let editcmspagedata = { title : title, description : description, content : content }
    console.log(editcmspagedata,'yyyyyyyyy');
    this.apiService.postEditCmsPageData(this.page_id,editcmspagedata).subscribe(
      res=>{
        console.log(res);
      }
    );
  }

  constructor(private apiService : ApiService,
              private fb : FormBuilder) { }

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

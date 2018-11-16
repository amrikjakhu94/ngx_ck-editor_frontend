import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-addnewcms',
  templateUrl: './addnewcms.component.html',
  styleUrls: ['./addnewcms.component.css']
})
export class AddnewcmsComponent implements OnInit {
  editorData: any ='';
  public editorValue: string = '<p>Demo data...</p>';

  addNewCmsForm = this.fb.group({
    title: ['',Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])],
    description: ['',Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])]
  })
  sendEditorData(data){
    //console.log(this.editorValue,'data sent');
    let title = data.title;
    let description = data.description;
    let content = this.editorValue;
    let newcmspagedata = { title : title, description : description, content : content }
    //console.log(newcmspagedata,'yyyyyyyyy');
    this.apiService.postNewCmsPageData(newcmspagedata).subscribe(
      res=>{
        //console.log('Data updated successfully.');
        console.log(res);
        this.addNewCmsForm.reset();
      }
    );
  }
  constructor(private fb: FormBuilder,
              private apiService : ApiService) { }

  onSubmit(){
    let title = this.addNewCmsForm.value.title;
    let description = this.addNewCmsForm.value.description;
    let content = this.editorValue;
    let newcmspagedata = { title : title, description : description, content : content }
    // console.log(newcmspagedata,'yyyyyyyyy');
    // this.apiService.postNewCmsPageData(newcmspagedata).subscribe(
    //   res=>{
    //     console.log('Data updated successfully.');
    //     console.log(res);
    //     this.addNewCmsForm.reset();
    //   }
    // );
  }

  resetEditorData(){
    
  }

  ngOnInit() {
  }

}

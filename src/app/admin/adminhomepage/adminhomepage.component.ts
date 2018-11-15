import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {
  public Editor = ClassicEditor;
  public model = {
    editorData: '<p>Hello world!</p>'
  };
  sendEditorData(data){
    console.log(data,'data sent');
    let content = { content : data };
    this.apiService.postAdminHomePageData(content,'Homepage').subscribe(
      res=>{
        console.log('Data updated successfully.')
      }
    )
  }
  resetEditorData(){
    //this.model.editorData = '<p>Hello world!</p>';
    this.getHomePageData();
  }
  constructor(private apiService : ApiService) { }

  getHomePageData(){
    this.apiService.getAdminHomePageData().subscribe(
      res=>{
        this.model.editorData = res.content;
      }
    )
  }

  ngOnInit() {
    this.getHomePageData();
  }

}
// <p><span style="font-size:48px"><strong>Hello</strong></span></p> <div id="101" style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px" title="div1 title"><p>Lorem ipsum new temporary data here</p></div> <p><img alt="" src="https://www.momjunction.com/wp-content/uploads/2015/07/Watermelons-For-Kids-1.jpg" style="height:200px; width:300px" />&nbsp;</p><form action="#" enctype="multipart/form-data" id="form1" method="get" name="form1" target="_blank">    <p><input name="name" required="required" type="text" value="enter name here" /></p>
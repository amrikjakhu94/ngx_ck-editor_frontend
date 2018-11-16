import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {
  public Editor = ClassicEditor;
  editorData: any;
  cmspages : any;
  cmspagecontent : any;

  constructor(private apiService : ApiService, 
    private router: Router) { }

  getAllCmsPages(){
    // this.apiService.getAllCmspages().subscribe(
    //   res=>{
    //     this.cmspages = res;
    //     console.log(this.cmspages,'aaaa');
    //     this.apiService.sendCmsData(this.cmspages);
    //   }
    // );
    // // const user = { name : 'amrik', sex : 'M' };
    // // console.log(this.cmspages,'cccccc');
   
    // this.apiService.getCmsData().subscribe(
    //   resp => {
    //     console.log(resp,'bbbbb');
    //   }
    // );
  }
  
  viewcmspage(data:any){
    this.apiService.sendCmsData(data);
    this.router.navigate(['/admin/viewcms']);
    //console.log('burraahhh');
    // this.apiService.getCmsPage(data).subscribe(
    //   res=>{
    //     console.log(res);
    //     this.cmspagecontent = res.content;
    //     //console.log(this.cmspagecontent);
    //     //this.router.navigateByUrl([]);

    //   }
    // )
  }

  editcmspage(data:any){
    this.apiService.sendCmsData(data);
    this.router.navigate(['/admin/editcms']);

  }

  ngOnInit() {
    // this.getAllCmsPages();
    this.apiService.getAllCmspages().subscribe(
      res=>{
        this.cmspages = res;
        this.apiService.sendCmsData(this.cmspages);
      }
    );
   
    // this.apiService.getCmsData().subscribe(
    //   resp => {
    //     console.log(resp,'bbbbb');
    //   }
    // );
  }

}
// <p><span style="font-size:48px"><strong>Hello</strong></span></p> <div id="101" style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px" title="div1 title"><p>Lorem ipsum new temporary data here</p></div> <p><img alt="" src="https://www.momjunction.com/wp-content/uploads/2015/07/Watermelons-For-Kids-1.jpg" style="height:200px; width:300px" />&nbsp;</p><form action="#" enctype="multipart/form-data" id="form1" method="get" name="form1" target="_blank">    <p><input name="name" required="required" type="text" value="enter name here" /></p>
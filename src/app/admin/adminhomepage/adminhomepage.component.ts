import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';
import { ToasterService } from '../../core/services/toaster.service';

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
  softdeletecmspage: Object;
  totalRecords : Number;
  page : Number = 1;
  limit : Number = 4;
  pageCount: Number;

  constructor(private apiService : ApiService, 
              private router: Router,
              private toasterService : ToasterService) { }

  getCmsPages(page : Number,limit : Number){
    // this.apiService.getAllCmspages().subscribe(
    //   res=>{
    //     this.cmspages = res;
    //     this.totalRecords = this.cmspages.length;
    //     this.apiService.sendCmsData(this.cmspages);
    //   }
    // );
    this.apiService.getCmspagesfrompaginate(page,limit).subscribe(
        res=>{
          // console.log(res);
          this.cmspages = res.cmspages;
          this.totalRecords = res.totalCount;
          this.apiService.sendCmsData(this.cmspages);
        }
      );
  }
  
  paginate(event) {
    console.log(event);
    this.page = event.page+1;
    this.pageCount = event.pageCount;
    this.getCmsPages(this.page,this.limit);
}

  viewcmspage(data:any){
    this.apiService.sendCmsData(data);
    this.router.navigate(['/admin/viewcms']);
  }

  editcmspage(data:any){
    this.apiService.sendCmsData(data);
    this.router.navigate(['/admin/editcms']);

  }

  deletecmspage(id: String){
    this.apiService.deleteCmsPage(id).subscribe(
      res=>{
        this.toasterService.showSuccess(res.message,'Success');
        this.apiService.sendCmsData(res.data);
        this.getCmsPages(1,4);
      },
      error=>{
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getCmsPages(this.page,this.limit);
  }

}

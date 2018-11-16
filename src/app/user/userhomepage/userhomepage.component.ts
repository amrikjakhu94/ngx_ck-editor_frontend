import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {
  cmspages: any;
  cmspagecontent: any;
  data : String;

  constructor(private apiService : ApiService) { }


  getHomePageData(){
    this.apiService.getUserHomePageData().subscribe(
      res=>{
        this.data = res.content
      }
    )
  }
  getAllCmsPages(){
    this.apiService.getAllCmspages().subscribe(
      res=>{
        this.cmspages = res;
      }
    )
  }

  getcmspage(page:any){
    //console.log('burraahhh');
    // this.apiService.getCmsPageFromTitle(title).subscribe(
    //   res=>{
    //     console.log(res);
    //     this.data = res.content;
    //     //console.log(this.cmspagecontent);
    //     //this.router.navigateByUrl([]);
    //   }
    // )
    // console.log(page,'jjjj');
    this.data = page.content
  }

  ngOnInit() {
    // this.getHomePageData();
    // this.getAllCmsPages();
    this.apiService.getAllCmspages().subscribe(
      res=>{
        this.cmspages = res;
        this.data = res[0].content;
        console.log(this.cmspages,'bbbb');
        this.apiService.sendCmsData(this.cmspages);
      }
    );

  }

}

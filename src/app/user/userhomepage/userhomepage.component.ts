import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {

  constructor(private apiService : ApiService) { }
  data : String;

  getHomePageData(){
    this.apiService.getUserHomePageData().subscribe(
      res=>{
        this.data = res.content;
      }
  }

  ngOnInit() {
    this.getHomePageData();
  }

}

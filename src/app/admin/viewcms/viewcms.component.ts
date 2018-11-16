import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-viewcms',
  templateUrl: './viewcms.component.html',
  styleUrls: ['./viewcms.component.css']
})
export class ViewcmsComponent implements OnInit {
  pagedata: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCmsData().subscribe(
      res => {
        this.pagedata = res;
        // console.log(res,'uuuuu');
      }
    );
  }
}

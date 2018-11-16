import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private apiService : ApiService,
              private router : Router) { }

  ngOnInit() {

  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link : String = 'http://localhost:3000';
  url : String;
  getAdminHomePageData():Observable<any>{
    return this.http.get(this.link+'/gethomepagedata');
  }
  
  postAdminHomePageData(data : Object,title : String):Observable<any>{
    //console.log(data,'dataaaaa');
    //console.log(this.link+`/puthomepagedata/${title}`,'azzzzzzzzzzzzzzzzzz');
    return this.http.post(this.link+`/posthomepagedata/${title}`,data);
  }

  getUserHomePageData():Observable<any>{
    return this.http.get(this.link+'/gethomepagedata');
  }
  
  constructor(private http : HttpClient){ }
}

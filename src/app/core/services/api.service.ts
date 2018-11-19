import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link : String = 'http://localhost:3000';
  url : String;

  private allcmsdata = new BehaviorSubject<any>('Amrik');
  public myallcmsdata = this.allcmsdata.asObservable();

  getCmsData(): Observable<any> {
    return this.allcmsdata.asObservable();
  }
  sendCmsData(data) {
    this.allcmsdata.next(data);
  }
  
  getAllCmspages():Observable<any>{
    return this.http.get(this.link+'/getallcmspages');
  }

  getCmspagesfrompaginate(page : Number,limit : Number):Observable<any>{
    return this.http.get(this.link+`/getcmspagesfrompaginate/${page}/${limit}`);
  }

  getCmsPage(title: String):Observable<any>{
    return this.http.get(this.link+`/getcmspagefromtitle/${title}`);
  }

  getAdminHomePageData():Observable<any>{
    return this.http.get(this.link+'/gethomepagedata');
  }
  
  postNewCmsPageData(data : Object):Observable<any>{
    //console.log(data,'dataaaaa');
    //console.log(this.link+`/puthomepagedata/${title}`,'azzzzzzzzzzzzzzzzzz');
    return this.http.post(this.link+`/postnewcmspagedata`,data);
  }

  postAdminHomePageData(data : Object,title : String):Observable<any>{
    //console.log(data,'dataaaaa');
    //console.log(this.link+`/puthomepagedata/${title}`,'azzzzzzzzzzzzzzzzzz');
    return this.http.post(this.link+`/posthomepagedata/${title}`,data);
  }

  postEditCmsPageData(id : String,data : Object):Observable<any>{
    return this.http.post(this.link+`/posteditcmspagedata/${id}`,data);
  }

  getUserHomePageData():Observable<any>{
    return this.http.get(this.link+'/gethomepagedata');
  }
  
  deleteCmsPage(id: String):Observable<any>{
    return this.http.delete(this.link+`/deletecmspage/${id}`);
  }

  constructor(private http : HttpClient){ }
}

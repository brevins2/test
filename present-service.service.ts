import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PresentServiceService {

  url = 'http://localhost:3000/post';
  constructor( private http: HttpClient) { }

  // getting data
  // tslint:disable-next-line: typedef
  getData(){
    return this.http.get(this.url);
  }

  // posting data
  // tslint:disable-next-line: typedef
  postData(data: any){
    console.warn('the data is', data);

    return this.http.post(this.url, data);
  }

  // tslint:disable-next-line: typedef
  deleteData(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }

  // tslint:disable-next-line: typedef
  getCurrentData(id: any){
    return this.http.get(`${this.url}/${id}`);
  }
}

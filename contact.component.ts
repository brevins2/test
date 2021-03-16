import { PresentServiceService } from './../service/present-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  collection: Object | any = [];
  constructor(private http: HttpClient, private served: PresentServiceService) { }

  ngOnInit(): void {

    // getting value
    this.served.getData().subscribe((request) => {
      console.warn(request);

      this.collection = request;
    });
  }

  // tslint:disable-next-line: typedef
  deleteData(item: any){
    this.collection.splice(item - 1, 1);
    return this.served.deleteData(item).subscribe((result) => {
      console.warn(result);
    });
  }
}

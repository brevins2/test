import { PresentServiceService } from './../service/present-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url = 'http://localhost:3000/post';
  constructor( private http: HttpClient, private service: PresentServiceService ) { }
  alert = false;

  // tslint:disable-next-line: new-parens
  LoginOutForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  });
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // submitting to login
  // tslint:disable-next-line: typedef
  Submit(data: any){
    // this.service.getData(this.LoginOutForm);
    this.http.get(this.url, data).subscribe((result) => {
      this.LoginOutForm.reset({});
      this.alert = true;
    });
  }

  // tslint:disable-next-line: typedef
  closeAlert(){
    this.alert = false;
  }
}


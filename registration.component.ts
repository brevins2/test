import { PresentServiceService } from './../service/present-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  url = 'http://localhost:3000/post';
  collection = {};
  alert = false;
  constructor(private http: HttpClient, private served: PresentServiceService) { }

  // form validation and inputing
  LoginForms = new FormGroup({
    firstName: new FormControl(''),
    secondName: new FormControl(''),
    gridRadios: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    streetAddress: new FormControl(''),
    employmentStatus: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    file: new FormControl(''),
    check: new FormControl('')
  });

  ngOnInit(): void {
  }

  // adding a member
  // tslint:disable-next-line: typedef
  addmember(){
    this.served.postData(this.LoginForms);
  }

  // the available data
  // tslint:disable-next-line: typedef
  onSubmit(data: any){
    // console.warn(this.LoginForms.value);

    // this failed so I used the next formatt
    // this.served.postData(this.LoginForms).subscribe((result) => {
    //   // console.warn(result);
    //   this.LoginForms.reset({});
    //   this.alert = true;
    // });

    this.http.post(this.url, data).subscribe((results) => {
      console.warn(results);
      this.LoginForms.reset({});
      this.alert = true;
    });
  }

  // closing alert
  // tslint:disable-next-line: typedef
  closeAlert(){
    this.alert = false;
  }
}

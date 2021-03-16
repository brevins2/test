import { PresentServiceService } from './../service/present-service.service';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  constructor(private route: ActivatedRoute, private served: PresentServiceService) { }

  alert = false;
  editForms = new FormGroup({
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
    console.warn(this.route.snapshot.params.id);
    // this.served.getCurrentData(this.route.snapshot.params.id).subscribe((result) => {
    //   console.warn('result', result);
    //   this.editForms = new FormGroup({
    //     firstName: new FormControl(result.firstName),
    //     secondName: new FormControl(result.secondName),
    //     gridRadios: new FormControl(result.gridRadios),
    //     email: new FormControl(result.email),
    //     password: new FormControl(result.password),
    //     confirmPassword: new FormControl(result.confirmPassword),
    //     streetAddress: new FormControl(result.streetAddress),
    //     employmentStatus: new FormControl(result.employment),
    //     city: new FormControl(result.city),
    //     state: new FormControl(result.state),
    //     zip: new FormControl(result.zip),
    //     file: new FormControl(result.file),
    //     check: new FormControl(result.check)
    //   });
    // });
  }

  // tslint:disable-next-line: typedef
  closeAlert(){
    return this.alert = true;
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Candidate } from 'src/app/models/candidate.model';
import { RestService } from 'src/app/rest.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false, showError: true}
  }]
})
export class FormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private restService: RestService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      degree: ['', Validators.required],
      university: ['', Validators.required],
      year: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      capability: ['', Validators.required],
    });
  }

  onSubmit()
  {
    let value = this.firstFormGroup.get('firstName').value;
    var candidate: Candidate = 
    {
      firstName: this.firstFormGroup.get('firstName').value,
      lastName: this.firstFormGroup.get('lastName').value,
      email: this.firstFormGroup.get('email').value,
      phone: this.firstFormGroup.get('email').value,
      degree: this.secondFormGroup.get('degree').value,
      university: this.secondFormGroup.get('university').value,
      yearOfGraduation: this.secondFormGroup.get('year').value,
      areasOfInterest: this.thirdFormGroup.get('capability').value,
    };
    this.restService.newCandidate(candidate).subscribe(
      candidate => {
        alert('SUCCESS!!');
      },
      error => {
        console.log(error); 
        alert('An Error Occured!!\n\n' + JSON.stringify(error));
      }
    );
    
  }
  getErrorMessage() {
    // return this.firstFormGroup.hasError('required') ? 'You must enter a value' :
    //     this.firstFormGroup.hasError('email') ? 'Not a valid email' :
    //         '';
    console.log("ERROR YALL");
  }
}

// this.candidate.firstName = this.firstFormGroup.get('firstName').value;
//     this.candidate.lastName = this.firstFormGroup.get('lastName').value;
//     this.candidate.email = this.firstFormGroup.get('email').value;
//     this.candidate.phone = this.firstFormGroup.get('email').value;
//     this.candidate.degree = this.secondFormGroup.get('degree').value;
//     this.candidate.university = this.secondFormGroup.get('university').value;
//     this.candidate.yearOfGraduation = this.secondFormGroup.get('year').value;
//     this.candidate.areasOfInterest = this.thirdFormGroup.get('capability').value;
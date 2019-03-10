import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
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
  submitted: boolean = false;
  rightToWork: string;
  options: string[] = ['Yes', 'No'];
  unableToWork: boolean = false;

  areasOfInterest = ['Development (Readify)', 'Data (Readify)', 'Design (Readify)', 'Infrastructure (Kloud)', 'Kloud'];
  current_selected: string;

  constructor(
    private _formBuilder: FormBuilder,
    private bottomSheet: MatBottomSheet, 
    private restService: RestService
    ) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
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

  onSelection(e, v){
    this.current_selected = e.option.value;
 }

 disableNextBtn(answer) {
  return (answer === 'No') ? this.unableToWork : !this.unableToWork;
  console.log(this.unableToWork);
}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

}

@Component({
  selector: 'app-form',
  templateUrl: 'role-desc.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();

  onSubmit()
  {
    this.submitted = !this.submitted;
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
}
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatBottomSheet, MatBottomSheetRef, MatListOption} from '@angular/material';

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
  areas: string[] = ['Development (Readify)', 'Data (Readify)', 'Design (Readify)', 'Infrastructure (Kloud)', 'Kloud'];
  selectedArea: string[];
  submitted: boolean = false;
  rightToWork: string;
  options: string[] = ['Yes', 'No'];

  constructor(
    private _formBuilder: FormBuilder,
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

  onGroupsChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
  }

  onSubmit(){
    this.submitted = !this.submitted;
  }

}

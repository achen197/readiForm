import { Component, OnInit, Input } from '@angular/core';
import { Router }  from '@angular/router';
import { FormDataService } from 'src/app/form-data.service';
import { FormData } from 'src/app/form-data'


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() formData: FormData;
  isFormValid: boolean = false;
  
  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      this.isFormValid = this.formDataService.isFormValid();
      console.log('Result feature loaded!');
  }

  submit() {
      alert('Excellent Job!');
      this.formData = this.formDataService.resetFormData();
      this.isFormValid = false;
  }

}

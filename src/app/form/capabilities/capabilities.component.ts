import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { FormDataService } from 'src/app/form-data.service';

import { Capability } from 'src/app/form-data'

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent implements OnInit {

  capability: Capability;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.capability = this.formDataService.getAddress();
      console.log('Address feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setAddress(this.capability);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/degree']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the result page
          this.router.navigate(['/result']);
      }
  }

}

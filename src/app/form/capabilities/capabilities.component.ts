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

  workType: string;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }


  ngOnInit() {
    this.workType = this.formDataService.getWork();
    console.log('Work feature loaded!');
}

save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    
    this.formDataService.setWork(this.workType);
    return true;
}

goToPrevious(form: any) {
    if (this.save(form)) {
        // Navigate to the personal page
        this.router.navigate(['/degree']);
    }
}

goToNext(form: any) {
    if (this.save(form)) {
        // Navigate to the address page
        this.router.navigate(['/result']);
    }
}

}

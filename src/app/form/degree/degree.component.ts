import { Component, OnInit, Input } from '@angular/core';
import { Router }  from '@angular/router';
import { FormDataService } from 'src/app/form-data.service';


import { Capability, Personal } from 'src/app/form-data'

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent implements OnInit {
  personal: Personal;
  capability: Capability;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.capability = this.formDataService.getAddress();
    this.personal = this.formDataService.getPersonal();
    console.log(this.personal);
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
        this.router.navigate(['/personal']);
    }
}

goToNext(form: any) {
    if (this.save(form)) {
        // Navigate to the result page
        this.router.navigate(['/capabilities']);
    }
}
}

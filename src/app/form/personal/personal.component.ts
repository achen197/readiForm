import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/form-data.service';
import { Router }  from '@angular/router';
import { Personal } from 'src/app/form-data'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personal: Personal;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.personal = this.formDataService.getPersonal();
      console.log('Personal feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setPersonal(this.personal);
      return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/degree']);
      }
  }

}

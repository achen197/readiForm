import { Injectable } from '@angular/core';
import { FormData, Personal, Degree, Capability } from 'src/app/form-data';

@Injectable({
  providedIn: 'root'
})

export class FormDataService {

  private formData: FormData = new FormData();
  private isPersonalFormValid: boolean = false;
  private isDegreeFormValid: boolean = false;
  private isCapabilityFormValid: boolean = false;

  getPersonal(): Personal {
      // Return the Personal data
      let personal: Personal = {
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          email: this.formData.email
      };
      return personal;
  }

  setPersonal(data: Personal) {
      // Update the Personal data only when the Personal Form had been validated successfully
      this.isPersonalFormValid = true;
      this.formData.firstName = data.firstName;
      this.formData.lastName = data.lastName;
      this.formData.email = data.email;
  }

  getWork() : string {
      // Return the work type
      return this.formData.capability;
  }
  
  setWork(data: string) {
      // Update the work type only when the Work Form had been validated successfully
      this.isDegreeFormValid = true;
      this.formData.capability = data;
  }

  getAddress() : Degree {
      // Return the Address data
      let degree: Degree = {
          university: this.formData.university,
          degree: this.formData.degree,
          graduated: this.formData.graduated,
      };
      return degree;
  }

  setAddress(data: Degree) {
      // Update the Address data only when the Address Form had been validated successfully
      this.isDegreeFormValid = true;
      this.formData.university = data.university;
      this.formData.degree = data.degree;
      this.formData.graduated = data.graduated;
  }

  getFormData(): FormData {
      // Return the entire Form Data
      return this.formData;
  }

  resetFormData(): FormData {
      // Return the form data after all this.* members had been reset
      this.formData.clear();
      this.isPersonalFormValid = this.isDegreeFormValid = this.isCapabilityFormValid = false;
      return this.formData;
  }

  isFormValid() {
      // Return true if all forms had been validated successfully; otherwise, return false
      return this.isPersonalFormValid &&
              this.isDegreeFormValid && 
              this.isCapabilityFormValid;
  }
}

import { Injectable } from '@angular/core';
import { Candidate } from './models/candidate.model';
import { Company } from './models/company.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private candidate: Candidate;
  private company: Company;

  getCandidate()
  {
    return this.candidate;
  }
  setCandidate(candidate: Candidate)
  {
    this.candidate = candidate;
  }

  getCompany()
  {
    return this.company;
  }
  setCompany(company: Company)
  {
    this.company = company;
  }
  constructor() { }
}

import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Candidate } from './models/candidate.model';
import { Company } from './models/company.model';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getAllCandidates(): Observable<Candidate[]>
  {
    return this.http.get<Candidate[]>("http://localhost:5000/api/candidate");
  }

  getAllCompanies(): Observable<Company[]>
  {
    return this.http.get<Company[]>("http://localhost:5000/api/company");
  }
   
  newCandidate(candidate: Candidate): Observable<Candidate>
  {
      return this.http.post<Candidate>("http://localhost:5000/api/candidate", candidate)
  }

}

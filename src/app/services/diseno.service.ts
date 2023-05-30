import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diseno } from '../models/diseno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisenoService {

  urlDg = 'http://localhost:5000/api/diseno/'

  constructor( private http: HttpClient ) { }

  guardarFormaDiseno(diseno: Diseno): Observable<any> {
    return this.http.post(this.urlDg, diseno);
  }

}
 
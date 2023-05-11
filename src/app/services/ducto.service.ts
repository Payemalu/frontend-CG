import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ducto } from './../models/ducto';

@Injectable({
  providedIn: 'root'
})
export class DuctoService {

  url = 'http://localhost:5000/api/ductos/';

  constructor( private http: HttpClient ) { }

  obtenerDuctos(): Observable<any> {
    return this.http.get( this.url );
  }
}

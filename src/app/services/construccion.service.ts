import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Construccion } from '../models/construccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstruccionService {

  URL_CCC = 'http://localhost:5000/api/construccion/'

  constructor( private http: HttpClient ) { }

  guardarFormaConstruccion(construccion: Construccion): Observable<any> {
    return this.http.post(this.URL_CCC, construccion);
  }

  obtenerListaConstruccion() {
    return this.http.get<Construccion[]>(this.URL_CCC);
  }

}

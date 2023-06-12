import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KilometrajeI } from '../models/areaUnitariaKm';

@Injectable({
  providedIn: 'root'
})
export class AreaUnitariaKmService {

  URL_AU = 'http://localhost:5000/api/areaUnitaria';

  constructor( private http: HttpClient) {}

  getKilometroInicial() {
    return this.http.get<KilometrajeI[]>(this.URL_AU);
  }

  obtenerAreasUnitariasKm(): Observable<any> {
    return this.http.get( this.URL_AU );
  }

  obtenerAreasUnitarias(): Observable<any> {
    return this.http.get( this.URL_AU );
  }

  obtenerKilometraje() :Observable<any> {
    return this.http.get( this.URL_AU );
  }
}

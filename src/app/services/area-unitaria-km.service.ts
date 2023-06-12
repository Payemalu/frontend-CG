import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KilometrajeI } from '../models/areaUnitariaKm';

@Injectable({
  providedIn: 'root'
})
export class AreaUnitariaKmService {

  // areaUnitariaSeleccionada: AreaUnitariaI | undefined;
  
  // areasUnitarias: AreaUnitariaI[] | undefined;

  URL_AU = 'http://localhost:5000/api/areaUnitaria';

  // private areasUnitarias : AreaUnitariaI[] = [];
  // private kilometraje : KilometrajeI[] = [];

  constructor( private http: HttpClient) {
    // this.areaUnitariaSeleccionada = new AreaUnitariaI(this.URL_AU);
  }

  getAreasUnitarias() {
    // return this.http.get<AreaUnitariaI[]>(this.URL_AU);
  }

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

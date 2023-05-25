import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaUnitariaKmService {

  urlAU = 'http://localhost:5000/api/areaUnitaria';

  constructor( private http: HttpClient) { }

  obtenerAreasUnitariasKm(): Observable<any> {
    return this.http.get( this.urlAU );
  }
}

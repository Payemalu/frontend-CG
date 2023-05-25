import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LiquidoPenetrante } from '../models/liquidoPenetrante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiquidosPenetrantesService {

  urlLP = 'http://localhost:5000/api/liquidosPenetrantes/'

  constructor( private http: HttpClient) { }

  guardarLiquidoPenetrante(liquidoPenetrante: LiquidoPenetrante): Observable<any> {
    return this.http.post(this.urlLP, liquidoPenetrante);
  }
}

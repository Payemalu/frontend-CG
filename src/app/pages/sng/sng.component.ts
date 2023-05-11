import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Ducto } from 'src/app/models/ducto';
import { DuctoService } from 'src/app/services/ducto.service';

@Component({
  selector: 'app-sng',
  templateUrl: './sng.component.html',
  styleUrls: ['./sng.component.scss']
})
export class SngComponent implements OnInit {
  
  listDucts: Ducto[] = [];

  // columnas: string[] = ['codigo', 'clave', 'ducto', 'borrar'];

  // datos: Articulo[] = [
  //   new Articulo('6421f10f5a215907217ffe73', 'SNG01', 'Ducto01'),
  //   new Articulo('6421f1265a215907217ffe74', 'SNG02', 'Ducto02'),
  //   new Articulo('6421f1265a215907217ffe75', 'SNG03', 'Ducto03'),
  // ];

  // articuloselect: Articulo = new Articulo("", "", "");

  constructor(
    private _ductSvc: DuctoService
  ) {}

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  ngOnInit(): void {
    this.getDucts();
  }

  getDucts() {
    console.log('Obteniendo ductos');
    this._ductSvc.obtenerDuctos()
    .subscribe(
      (data) => {
        console.log(data);
        this.listDucts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // borrarFila(cod: number) {
  //   if (confirm("Realmente quiere borrarlo?")) {
  //     this.datos.splice(cod, 1);
  //     this.tabla1.renderRows();
  //   }
  // }

  // agregar() {
  //   this.datos.push(new Articulo(this.articuloselect.codigo, this.articuloselect.clave, this.articuloselect.ducto));
  //   this.tabla1.renderRows();
  //   this.articuloselect = new Articulo("", "", "");
  // }
}


export class Articulo {
  // constructor(public codigo: number, public descripcion: string, public precio: number) {}
  constructor(public codigo: string, public clave: string, public ducto: string) {
  }
}

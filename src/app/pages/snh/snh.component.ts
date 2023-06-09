import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-snh',
  templateUrl: './snh.component.html',
  styleUrls: ['./snh.component.scss']
})
export class SnhComponent {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  columnas: string[] = ['codigo', 'clave', 'ducto', 'borrar'];

  datos: Articulo[] = [
    new Articulo('6421f10f5a215907217ffe73', 'SNG01', 'Ducto01'),
    new Articulo('6421f1265a215907217ffe74', 'SNG02', 'Ducto02'),
    new Articulo('6421f1265a215907217ffe75', 'SNG03', 'Ducto03'),
  ];

  articuloselect: Articulo = new Articulo("", "", "");

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Articulo(this.articuloselect.codigo, this.articuloselect.clave, this.articuloselect.ducto));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo("", "", "");
  }
}

export class Articulo {
  constructor(public codigo: string, public clave: string, public ducto: string) {
  }
}

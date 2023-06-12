import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Ducto } from 'src/app/models/ducto';
import { CveAuI, SngI } from 'src/app/models/sng-interface';
import { sng, cveau } from 'src/app/mocks/sng-data/datos-sng';

import { DuctoService } from 'src/app/services/ducto.service';
import { MatSelectChange } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sng',
  templateUrl: './sng.component.html',
  styleUrls: ['./sng.component.scss'],
})
export class SngComponent implements OnInit {
  /*** Area selector ********************/
  listaDuctos: SngI[] = sng;
  value = '';
  dataSourceSng = new MatTableDataSource<SngI>(this.listaDuctos);
  ductos = this.listaDuctos;
  /*** Area selector ********************/

  ductoSng: FormGroup;

  /*** Area selector CVE ****************/
  listaCve: CveAuI[] = cveau;
  dataSourceCve = new MatTableDataSource<CveAuI>(this.listaCve);
  cves = this.listaCve;
  /*** Area selector CVE ****************/

  step = 0;

  listDucts: Ducto[] = [];

  bloquear: boolean = true;

  // columnas: string[] = ['codigo', 'clave', 'ducto', 'borrar'];

  // datos: Articulo[] = [
  //   new Articulo('6421f10f5a215907217ffe73', 'SNG01', 'Ducto01'),
  //   new Articulo('6421f1265a215907217ffe74', 'SNG02', 'Ducto02'),
  //   new Articulo('6421f1265a215907217ffe75', 'SNG03', 'Ducto03'),
  // ];

  // articuloselect: Articulo = new Articulo("", "", "");

  constructor(
    private fb: FormBuilder,
    private _ductSvc: DuctoService
  ) // private svcDucto: sng
  {
    this.ductoSng = this.fb.group({
      ducto: [],
      subsistema1: [],
      subsistema2: [],
      tramo1: [],
      tramo2: [],

      cve_au: [],
      km_inicial_ddv: [],
      km_destino_ddv: [],
    });
  }

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  ngOnInit(): void {
    this.getDucts();
    this.listaDuctos = sng;
    console.log('Ductos->', this.listaDuctos);
    this.listaCve = cveau;
    console.log('Claves->', this.listaCve);
  }

  getDucts() {
    console.log('Obteniendo ductos');
    this._ductSvc.obtenerDuctos().subscribe(
      (data) => {
        console.log(data);
        this.listDucts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectedPipe(trigger: MatSelectChange) {
    this.dataSourceSng = trigger.value;

    const selectedCve = this.ductos.find((x) => x.ducto == trigger.value);

    if (selectedCve) this.ductoSng.controls['tramo1'].patchValue(selectedCve.tramo1);
    if (selectedCve) this.ductoSng.controls['tramo2'].patchValue(selectedCve.tramo2);
  }

  selectedCve(trigger: MatSelectChange) {
    this.dataSourceSng = trigger.value;

    const selectedCve = this.cves.find((x) => x.cve_au == trigger.value);

    if (selectedCve) this.ductoSng.controls['km_inicial_ddv'].patchValue(selectedCve.km_inicial_ddv);
    if (selectedCve) this.ductoSng.controls['km_destino_ddv'].patchValue(selectedCve.km_destino_ddv);
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

  setStep(index: number) {
    this.step = index;

    this.bloquear = false;

    setTimeout( () => {
      // despues de 2 segundos se volverá a habilitar
      this.bloquear = false;
    }, 2000);
  }

  nextStep() {
    this.step++;
    this.bloquear = true;

    setTimeout( () => {
      // despues de 2 segundos se volverá a habilitar
      this.bloquear = false;
    }, 2000);
  }

  prevStep() {
    this.step--;
  }

}

export class Articulo {
  // constructor(public codigo: number, public descripcion: string, public precio: number) {}
  constructor(
    public codigo: string,
    public clave: string,
    public ducto: string
  ) {}
}

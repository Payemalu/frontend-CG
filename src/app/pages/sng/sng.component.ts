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
    this.listaCve = cveau;
  }

  getDucts() {
    this._ductSvc.obtenerDuctos().subscribe(
      (data) => {
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

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}

export class Articulo {
  constructor(
    public codigo: string,
    public clave: string,
    public ducto: string
  ) {}
}

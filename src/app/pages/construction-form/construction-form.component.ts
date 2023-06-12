import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KilometrajeI } from 'src/app/models/areaUnitariaKm';
import { Construccion } from 'src/app/models/construccion';
import { AreaUnitariaKmService } from 'src/app/services/area-unitaria-km.service';
import { ConstruccionService } from 'src/app/services/construccion.service';

interface Tramo {
  value: number;
}

@Component({
  selector: 'app-construction-form',
  templateUrl: './construction-form.component.html',
  styleUrls: ['./construction-form.component.scss']
})
export class ConstructionFormComponent implements OnInit {

  /*** Area selector ********************/
  kilometroInicial: KilometrajeI[] = [];
  value = '';
  dataSourceDg = new MatTableDataSource<KilometrajeI>(this.kilometroInicial);
  ductos = this.kilometroInicial;
  /*** Area selector ********************/

  construccionForm: FormGroup;
  kilometro_destino: any;

  deliveryOption = false;

  tramos: Tramo[] = [
    {value: 1},
    {value: 2}
  ];
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private construccionService: ConstruccionService,
    private dataService: AreaUnitariaKmService
  ) {
    this.construccionForm = this.fb.group({
      clave: ['', Validators.required],
      area_unitaria: [],
      km_inicial_ddv: [],
      km_destino_ddv: [],
      nombre_tramo: [],
      tramo: [],
      origen_coordenadas: [''],
      destino_coordenadas: [''],
      
      fecha_construccion: [''],
      metodo_recubrimiento: [''],
      tipo_suelo: [''],
      material_relleno: [''],
      proteccion_catodica: [''],
      tipo_recubrimiento: [''],
    });
  }

  ngOnInit(): void {
    this.getKilometroInicial();
  }

  selectedClue(trigger: MatSelectChange) {

    this.dataSourceDg = trigger.value;

    const selectedCve = this.ductos.find((x) => x.clave == trigger.value);
    const selectedAU = this.ductos.find((x) => x.area_unitaria == trigger.value);

    if ( selectedCve ) {
      this.construccionForm.controls['area_unitaria'].patchValue(selectedCve.area_unitaria);
      this.construccionForm.controls['nombre_tramo'].patchValue(selectedCve.nombre_tramo);
      this.construccionForm.controls['tramo'].patchValue(selectedCve.tramo);
      this.construccionForm.controls['km_inicial_ddv'].patchValue(selectedCve.km_inicial_ddv);
      this.construccionForm.controls['km_destino_ddv'].patchValue(selectedCve.km_destino_ddv);
    }
    // if ( selectedCve ) this.construccionForm.controls['tramo'].patchValue(selectedCve.tramo);
    // if ( selectedCve ) this.construccionForm.controls['km_inicial_ddv'].patchValue(selectedCve.km_inicial_ddv);
    // if ( selectedCve ) this.construccionForm.controls['km_destino_ddv'].patchValue(selectedCve.km_destino_ddv);

    if ( selectedAU ) {
      this.construccionForm.controls['clave'].patchValue(selectedAU.clave);
      this.construccionForm.controls['nombre_tramo'].patchValue(selectedAU.nombre_tramo);
      this.construccionForm.controls['tramo'].patchValue(selectedAU.tramo);
      this.construccionForm.controls['km_inicial_ddv'].patchValue(selectedAU.km_inicial_ddv);
      this.construccionForm.controls['km_destino_ddv'].patchValue(selectedAU.km_destino_ddv);
    }
    // if ( selectedAU ) this.construccionForm.controls['tramo'].patchValue(selectedAU.tramo);
    // if ( selectedAU ) this.construccionForm.controls['km_inicial_ddv'].patchValue(selectedAU.km_inicial_ddv);
    // if ( selectedAU ) this.construccionForm.controls['km_destino_ddv'].patchValue(selectedAU.km_destino_ddv);

  }

  getKilometroInicial() {
    this.dataService.getKilometroInicial()
      .subscribe(
        (res) => {
          this.kilometroInicial = res;
          this.ductos = this.kilometroInicial;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  agregarConstruccion() {
    const CONSTRUCCION: Construccion = {
      clave: this.construccionForm.get('clave')?.value,
      area_unitaria: this.construccionForm.get('area_unitaria')?.value,
      km_inicial_ddv: this.construccionForm.get('km_inicial_ddv')?.value,
      km_destino_ddv: this.construccionForm.get('km_destino_ddv')?.value,
      tramo: this.construccionForm.get('tramo')?.value,
      nombre_tramo: this.construccionForm.get('nombre_tramo')?.value,
      origen_coordenadas: this.construccionForm.get('origen_coordenadas')?.value,
      destino_coordenadas: this.construccionForm.get('destino_coordenadas')?.value,
      fecha_construccion: this.construccionForm.get('fecha_construccion')?.value,
      metodo_recubrimiento: this.construccionForm.get('metodo_recubrimiento')?.value,
      tipo_suelo: this.construccionForm.get('tipo_suelo')?.value,
      material_relleno: this.construccionForm.get('material_relleno')?.value,
      proteccion_catodica: this.construccionForm.get('proteccion_catodica')?.value,
      tipo_recubrimiento: this.construccionForm.get('tipo_recubrimiento')?.value,
    };    
    this.construccionService
      .guardarFormaConstruccion(CONSTRUCCION)
      .subscribe(
        (data) => {
          this.toastr.success(
            'El nuevo dato construcción se agregó con éxito!!!'
          );
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.construccionForm.reset();
        }
      );
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
}

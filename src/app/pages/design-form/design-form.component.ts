import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KilometrajeI } from 'src/app/models/areaUnitariaKm';
import { Diseno } from 'src/app/models/diseno';
import { AreaUnitariaKmService } from 'src/app/services/area-unitaria-km.service';
import { DisenoService } from 'src/app/services/diseno.service';

interface Tramo {
  value: number;
}

@Component({
  selector: 'app-design-form',
  templateUrl: './design-form.component.html',
  styleUrls: ['./design-form.component.scss']
})
export class DesignFormComponent implements OnInit {

  /*** Area selector ********************/
  kilometroInicial: KilometrajeI[] = [];
  selected = '-- Seleccione una Clave --'
  value = '';
  dataSourceDg = new MatTableDataSource<KilometrajeI>(this.kilometroInicial);
  items = this.kilometroInicial;
  /*** Area selector ********************/

  disenoForm: FormGroup;

  tramos: Tramo[] = [
    {value: 1},
    {value: 2}
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private disenoService: DisenoService,
    private dataService: AreaUnitariaKmService
  ) {
    this.disenoForm = this.fb.group({
      clave: ['', Validators.required],
      area_unitaria: ['', Validators.required],
      tramo: ['', Validators.required],
      km_inicial_ddv: [],
      km_destino_ddv: [],

      origen_coordenadas: [''],
      destino_coordenadas: [''],
      longitud: [''],
      diametro_mm: [''],
      diametro_inch: [''],
      espesor_pared_mm: [''],
      espesor_pared_inch: [''],
      especificacion_material: [''],
      temperatura_diseno_c: [''],
      temperatura_diseno_f: [''],
      fecha_fabricacion: [''],
      resistencia_traccion: [''],
      elemento_maximo_c: [''],
      limite_elastico: [''],
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

  selectedType(trigger: MatSelectChange) {
    this.dataSourceDg = trigger.value;

    const selectedItem = this.items.find((x) => x.clave == trigger.value);
    const selectedAU = this.items.find((x) => x.area_unitaria == trigger.value);

    if ( selectedItem ) this.disenoForm.controls['area_unitaria'].patchValue(selectedItem.area_unitaria);
    if ( selectedItem ) this.disenoForm.controls['km_inicial_ddv'].patchValue(selectedItem.km_inicial_ddv);
    if ( selectedItem ) this.disenoForm.controls['km_destino_ddv'].patchValue(selectedItem.km_destino_ddv);

    if ( selectedAU ) this.disenoForm.controls['clave'].patchValue(selectedAU.clave);
    if ( selectedAU ) this.disenoForm.controls['km_inicial_ddv'].patchValue(selectedAU.km_inicial_ddv);
    if ( selectedAU ) this.disenoForm.controls['km_destino_ddv'].patchValue(selectedAU.km_destino_ddv);
  }

  getKilometroInicial() {
    this.dataService.getKilometroInicial()
      .subscribe(
        (res) => {
          this.kilometroInicial = res;
          this.items = this.kilometroInicial;
          this.items[0];
          this.items.sort();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  agregarDiseno() {
    const DISENO: Diseno = {
      clave: this.disenoForm.get('clave')?.value,
      area_unitaria: this.disenoForm.get('area_unitaria')?.value,
      tramo: this.disenoForm.get('tramo')?.value,
      km_inicial_ddv: this.disenoForm.get('km_inicial_ddv')?.value,
      km_destino_ddv: this.disenoForm.get('km_destino_ddv')?.value,
      origen_coordenadas: this.disenoForm.get('origen_coordenadas')?.value,
      destino_coordenadas: this.disenoForm.get('destino_coordenadas')?.value,
      longitud: this.disenoForm.get('longitud')?.value,
      diametro_mm: this.disenoForm.get('diametro_mm')?.value,
      diametro_inch: this.disenoForm.get('diametro_inch')?.value,
      espesor_pared_mm: this.disenoForm.get('espesor_pared_mm')?.value,
      espesor_pared_inch: this.disenoForm.get('espesor_pared_inch')?.value,
      especificacion_material: this.disenoForm.get('especificacion_material')?.value,
      temperatura_diseno_c: this.disenoForm.get('temperatura_diseno_c')?.value,
      temperatura_diseno_f: this.disenoForm.get('temperatura_diseno_f')?.value,
      fecha_fabricacion: this.disenoForm.get('fecha_fabricacion')?.value,
      resistencia_traccion: this.disenoForm.get('resistencia_traccion')?.value,
      elemento_maximo_c: this.disenoForm.get('elemento_maximo_c')?.value,
      limite_elastico: this.disenoForm.get('limite_elastico')?.value,
      fecha_construccion: this.disenoForm.get('fecha_construccion')?.value,
      metodo_recubrimiento: this.disenoForm.get('metodo_recubrimiento')?.value,
      tipo_suelo: this.disenoForm.get('tipo_suelo')?.value,
      material_relleno: this.disenoForm.get('material_relleno')?.value,
      proteccion_catodica: this.disenoForm.get('proteccion_catodica')?.value,
      tipo_recubrimiento: this.disenoForm.get('tipo_recubrimiento')?.value,
    };
    this.disenoService
      .guardarFormaDiseno(DISENO)
      .subscribe(
        (data) => {
          this.toastr.success(
            'El nuevo líquido penetrante se agregó con éxito!!!'
          );
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.disenoForm.reset();
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

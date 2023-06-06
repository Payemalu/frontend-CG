import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Diseno } from 'src/app/models/diseno';
import { DisenoService } from 'src/app/services/diseno.service';

@Component({
  selector: 'app-design-form',
  templateUrl: './design-form.component.html',
  styleUrls: ['./design-form.component.scss']
})
export class DesignFormComponent implements OnInit {

  disenoForm: FormGroup;
  selected = '-- Seleccione --'

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private disenoService: DisenoService
  ) {
    this.disenoForm = this.fb.group({
      clave: [''],
      area_unitaria: [''],
      tramo: ['', Validators.required],
      origen_km: ['', Validators.required],
      destino_km: ['', Validators.required],
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

  ngOnInit(): void {}

  agregarDiseno() {
    const DISENO: Diseno = {
      clave: this.disenoForm.get('clave')?.value,
      area_unitaria: this.disenoForm.get('area_unitaria')?.value,
      tramo: this.disenoForm.get('tramo')?.value,
      origen_km: this.disenoForm.get('origen_km')?.value,
      destino_km: this.disenoForm.get('destino_km')?.value,
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
    console.log('Diseño->', DISENO);
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

import { Component, OnInit } from '@angular/core';
import { Diseno } from 'src/app/models/diseno';
import { DisenoService } from 'src/app/services/diseno.service';

@Component({
  selector: 'app-listar-diseno',
  templateUrl: './listar-diseno.component.html',
  styleUrls: ['./listar-diseno.component.scss']
})
export class ListarDisenoComponent implements OnInit {

  listDiseno: Diseno[] = [];

  displayedColumns = [
    'clave',
    'area_unitaria',
    'nombre_tramo',
    'km_inicial_ddv',
    'km_destino_ddv',
    'origen_coordenadas',
    'destino_coordenadas',
    'longitud',
    'diametro_mm',
    'diametro_inch',
    'espesor_pared_mm',
    'espesor_pared_inch',
    'especificacion_material',
    'temperatura_diseno_c',
    'temperatura_diseno_f',
    'fecha_fabricacion',
    'resistencia_traccion',
    'elemento_maximo_c',
    'limite_elastico',
    'fecha_construccion',
    'metodo_recubrimiento',
    'tipo_suelo',
    'material_relleno',
    'proteccion_catodica',
    'tipo_recubrimiento',
    'star',
  ];
  dataSource = this.listDiseno;

  constructor(
    private disenoService: DisenoService
  ) {}

  ngOnInit(): void {
    this.obtenerListaDiseno();
  }

  obtenerListaDiseno() {
    this.disenoService.obtenerListaDiseno()
    .subscribe(
      (res) => {
        this.listDiseno = res;
        this.dataSource = this.listDiseno;
        this.listDiseno[0];
        this.listDiseno.sort();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

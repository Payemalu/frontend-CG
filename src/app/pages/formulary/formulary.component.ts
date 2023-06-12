import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LiquidoPenetrante } from '../../models/liquidoPenetrante';
import { LiquidosPenetrantesService } from 'src/app/services/liquidos-penetrantes.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AreaUnitariaKmService } from 'src/app/services/area-unitaria-km.service';
import { DatePipe } from '@angular/common';
import { KilometrajeI } from 'src/app/models/areaUnitariaKm';
import { filter } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss'],
  providers: [AreaUnitariaKmService]
})

export class FormularyComponent implements OnInit {

  /*** Area selector ********************/
  // public selectedKmIni: KilometrajeI = { _id: 0, kilometro_inicial: '', km_inicial_ddv: '', area_unitaria: '', km_final: '', km_final_ddv: '' };
  kilometroInicial: KilometrajeI[] = [];
  selected = 'Kilómetro Inicial';
  value = '';
  dataSourceAU = new MatTableDataSource<KilometrajeI>(this.kilometroInicial);
  items = this.kilometroInicial;
  /*** Area selector ********************/


  liqPenForm: FormGroup;

  dataSourceLP = new MatTableDataSource<Article>();
  selection = new SelectionModel<Article>(true, []);

  commentFC = new FormControl();

  // today: Date = new Date();
  // pipe = new DatePipe('es-MEX');
  // todayWithPipe: any;

  onCommentChange() {
    console.log(this.commentFC.value);
  }
  commentDA = new FormControl();
  onCommentChangeDa() {
    console.log(this.commentDA.value);
  }
  commentOb = new FormControl();
  onCommentChangeOb() {
    console.log(this.commentOb.value);
  }
  commentDP = new FormControl();
  onCommentChangeDP() {
    console.log(this.commentDP.value);
  }

  

  // range = new FormGroup({
  //   fechaConstruccionStart: new FormControl<Date | null>(null),
  //   fechaConstruccionEnd: new FormControl<Date | null>(null),
  // });

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  //=== Table =====================================
  columns: string[] = [
    'identificacion',
    'elemento_a',
    'elemento_b',
    'evaluacion',
    'longitud_total',
    'tipo_defecto',
    'dimension_defecto',
    'observaciones',
    'select',
    'borrar',
  ];
  data: Article[] = [
    new Article(
      'SCF-1',
      'Elemento A1',
      'Elemento B1',
      7.8,
      16000,
      'No conecta',
      'Tres campos',
      'Demasiados rangos de error',
      false
    ),
    new Article(
      'SCF-2',
      'Elemento A2',
      'Elemento B2',
      8.9,
      32000,
      'Sí conecta',
      'Dos campos',
      'Corregidos los rangos de error',
      false
    ),
    new Article(
      'SCF-3',
      'Elemento A3',
      'Elemento B3',
      9.0,
      48000,
      'No conecta',
      'Cuatro campos',
      'Más rangos de error',
      false
    ),
  ];

  selectedarticle: Article = new Article('', '', '', 0, 0, '', '', '', false);

  @ViewChild(MatTable) table1!: MatTable<Article>;

  eraseRow(cod: number) {
    if (confirm('Realmente quiere borrarlo?')) {
      this.data.splice(cod, 1);
      this.table1.renderRows();
    }
  }

  aggregate() {
    this.data.push(
      new Article(
        this.selectedarticle.identificacion,
        this.selectedarticle.elemento_a,
        this.selectedarticle.elemento_b,
        this.selectedarticle.evaluacion,
        this.selectedarticle.longitud_total,
        this.selectedarticle.tipo_defecto,
        this.selectedarticle.dimension_defecto,
        this.selectedarticle.observaciones,
        this.selectedarticle.select
      )
    );
    this.table1.renderRows();
    this.selectedarticle = new Article('', '', '', 0, 0, '', '', '', false);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private liquidoPenService: LiquidosPenetrantesService,
    private dataService: AreaUnitariaKmService
  ) {
    this.liqPenForm = this.fb.group({
      fecha_inicio: ['', Validators.required],
      fecha_final: ['', Validators.required],
      numero_reporte: ['', Validators.required],
      sistema: ['', Validators.required],
      presion_operacion: ['', Validators.required],
      temperatura_operacion: ['', Validators.required],
      km_final: [],
      kilometro_inicial: [''],
      area_unitaria: [''],
      kilometro_destino: [''],
      descripcion_obra: [''],
      nombre_linea_tramo: [''],
      localizacion_coordenadas: [''],
      localizacion_kilometraje: [''],
      des_actividades_inspeccion: [''],
      diametro: [''],
      espesor_nominal: [''],
      especificacion: [''],
      zona_inspeccionada: [''],
      tipo_material: [''],
      dimensiones: [''],
      descripcion_pieza: [''],
      temperatura_prueba: [''],
      acabado_superficial: [''],
      iluminacion: [''],
      material_absorbente: [''],
      codigo_aplicable: [''],
      parte: [''],
      seccion: [''],
      procedimiento: [''],
      tecnica_metodo: [''],
      aplicacion: [''],
      visible: [''],
      fluorescente: [''],
      tiempo_penetracion: [''],
      marca_penetrante: [''],
      num_lote_penetrante: [''],
      tiempo_secado: [''],
      marca_removedor: [''],
      num_lote_removedor: [''],
      tiempo_revelado: [''],
      marca_revelador: [''],
      num_lote_marca: [''],
      tipo_grupo_penetracion: [''],
      tipo_penetrante: [''],
      tipo_revelador: [''],
      referencia: [''],
      elemento: [''],
      descripcion: [''],
      identificacion: [''],
      tbl_identificacion: [''],
      tbl_elemento_a: [''],
      tbl_elemento_b: [''],
      tbl_evaluacion: [''],
      tbl_evaluacion_longitud: [''],
      tbl_tipo_defecto: [''],
      tbl_dimension_defecto: [''],
      tbl_observaciones: [''],
      tbl_resultado_dictamen: [''],
      resultado: [''],
      observaciones: [''],
    });
  }

  ngOnInit(): void {
    this.getKilometroInicial();
  }
  
  selectedType(trigger: MatSelectChange) {
    this.dataSourceAU = trigger.value;

    const selectedItem = this.items.find((x) => x.kilometro_inicial == trigger.value);
    if ( selectedItem ) this.liqPenForm.controls['area_unitaria'].patchValue(selectedItem.area_unitaria);
    if ( selectedItem ) this.liqPenForm.controls['kilometro_destino'].patchValue(selectedItem.kilometro_destino);
  }

  getKilometroInicial() {
    this.dataService.getKilometroInicial()
      .subscribe(
        (res) => {
          this.kilometroInicial = res;
          this.items = this.kilometroInicial;
          console.log('Items->', this.items);
        },
        (error) => {
          console.log(error);
        }
      );
    
  }

  // getAreasUnitarias1() {
  //   this.dataService.getAreasUnitarias().subscribe((res) => {
  //     this.dataService.areasUnitarias = res;
  //     console.log('Áreas Unitarias: ', this.dataService.areasUnitarias);
  //   });
  // }

  // getAreasUnitarias() {
  //   console.log('Obteniendo área unitaria...');
  //   this.dataService.getAreasUnitarias()
  //   .subscribe((res) => {
  //     console.log('Áreas Unitarias: ', res);
  //     this.listAreaUnitaria = res;
  //   },
  //   (error) => {
  //     console.log(error);
  //   });
  // }

  // getKilometro_inicial() {
  //   console.log('Obteniendo kilómetro inicial...');
  //   this.dataService.getKilometro_inicial()
  //   .subscribe((res) => {
  //     console.log('Kilómetro inicial: ', res);
  //     this.kilometro_inicial = res;
  //   },
  //   (error) => {
  //     console.log(error);
  //   });
  // }

  // editAreaUnitaria(areaUnitaria: AreaUnitariaI) {
  //   this.dataService.areaUnitariaSeleccionada = areaUnitaria;
  // }


  cambiarKilometraje(_id: any){
    console.log('Id->', _id);
    // this.kilometro_inicial = this.dataService.getKilometro_inicial().filter(item => item.countryId == _id);
  }

  cambioRegion(dato:any){
    //Aqui va tu logica de consulta a la BD

    // this.kilometraje = this.kilometro_inicial[dato]
  }




  // onSelect1(_id: any): void {
  //   console.log('Id->', _id);
  //   this.kilometro_inicial = this.dataService.getKilometroInicial().filter(item => item.kilometro_inicial == _id);
  // }
  onSelect( id: any ):void {
    console.log('Id->', id);
    this.dataService.getKilometroInicial();
  }

  // compararNombres( areaUnitariaKm1:AreaUnitariaI, areaUnitariaKm2:AreaUnitariaI) {
  //   if (areaUnitariaKm1==null || areaUnitariaKm2==null) {
  //     return false
  //   }
  //   return areaUnitariaKm1.area_unitaria===areaUnitariaKm2.area_unitaria;
  // }

  agregarLiquidoPenetrante() {
    const LIQUIDOPENETRANTE: LiquidoPenetrante = {
      fecha_inicio: this.liqPenForm.get('fecha_inicio')?.value,
      fecha_final: this.liqPenForm.get('fecha_final')?.value,
      numero_reporte: this.liqPenForm.get('numero_reporte')?.value,
      sistema: this.liqPenForm.get('sistema')?.value,
      presion_operacion: this.liqPenForm.get('presion_operacion')?.value,
      temperatura_operacion: this.liqPenForm.get('temperatura_operacion')?.value,
      kilometro_inicial: this.liqPenForm.get('kilometro_inicial')?.value,
      area_unitaria: this.liqPenForm.get('area_unitaria')?.value,
      kilometro_destino: this.liqPenForm.get('kilometro_destino')?.value,

      descripcion_obra: this.liqPenForm.get('descripcion_obra')?.value,
      nombre_linea_tramo: this.liqPenForm.get('nombre_linea_tramo')?.value,
      localizacion_coordenadas: this.liqPenForm.get('localizacion_coordenadas')
        ?.value,
      localizacion_kilometraje: this.liqPenForm.get('localizacion_kilometraje')
        ?.value,
      des_actividades_inspeccion: this.liqPenForm.get('des_actividades_inspeccion')
        ?.value,
      diametro: this.liqPenForm.get('diametro')?.value,
      espesor_nominal: this.liqPenForm.get('espesor_nominal')?.value,
      especificacion: this.liqPenForm.get('especificacion')?.value,
      zona_inspeccionada: this.liqPenForm.get('zona_inspeccionada')?.value,
      tipo_material: this.liqPenForm.get('tipo_material')?.value,
      dimensiones: this.liqPenForm.get('dimensiones')?.value,
      descripcion_pieza: this.liqPenForm.get('descripcion_pieza')?.value,
      temperatura_prueba: this.liqPenForm.get('temperatura_prueba')?.value,
      acabado_superficial: this.liqPenForm.get('acabado_superficial')?.value,
      iluminacion: this.liqPenForm.get('iluminacion')?.value,
      material_absorbente: this.liqPenForm.get('material_absorbente')?.value,
      codigo_aplicable: this.liqPenForm.get('codigo_aplicable')?.value,
      parte: this.liqPenForm.get('parte')?.value,
      seccion: this.liqPenForm.get('seccion')?.value,
      procedimiento: this.liqPenForm.get('procedimiento')?.value,
      tecnica_metodo: this.liqPenForm.get('tecnica_metodo')?.value,
      aplicacion: this.liqPenForm.get('aplicacion')?.value,
      visible: this.liqPenForm.get('visible')?.value,
      fluorescente: this.liqPenForm.get('fluorescente')?.value,
      tiempo_penetracion: this.liqPenForm.get('tiempo_penetracion')?.value,
      marca_penetrante: this.liqPenForm.get('marca_penetrante')?.value,
      num_lote_penetrante: this.liqPenForm.get('num_lote_penetrante')?.value,
      tiempo_secado: this.liqPenForm.get('tiempo_secado')?.value,
      marca_removedor: this.liqPenForm.get('marca_removedor')?.value,
      num_lote_removedor: this.liqPenForm.get('num_lote_removedor')?.value,
      tiempo_revelado: this.liqPenForm.get('tiempo_revelado')?.value,
      marca_revelador: this.liqPenForm.get('marca_revelador')?.value,
      num_lote_marca: this.liqPenForm.get('num_lote_marca')?.value,
      tipo_grupo_penetracion: this.liqPenForm.get('tipo_grupo_penetracion')?.value,
      tipo_penetrante: this.liqPenForm.get('tipo_penetrante')?.value,
      tipo_revelador: this.liqPenForm.get('tipo_revelador')?.value,
      referencia: this.liqPenForm.get('referencia')?.value,
      elemento: this.liqPenForm.get('elemento')?.value,
      descripcion: this.liqPenForm.get('descripcion')?.value,
      identificacion: this.liqPenForm.get('identificacion')?.value,
      tbl_identificacion: this.liqPenForm.get('tbl_identificacion')?.value,
      tbl_elemento_a: this.liqPenForm.get('tbl_elemento_a')?.value,
      tbl_elemento_b: this.liqPenForm.get('tbl_elemento_b')?.value,
      tbl_evaluacion: this.liqPenForm.get('tbl_evaluacion')?.value,
      tbl_evaluacion_longitud: this.liqPenForm.get('tbl_evaluacion_longitud')
        ?.value,
      tbl_tipo_defecto: this.liqPenForm.get('tbl_tipo_defecto')?.value,
      tbl_dimension_defecto: this.liqPenForm.get('tbl_dimension_defecto')
        ?.value,
      tbl_observaciones: this.liqPenForm.get('tbl_observaciones')?.value,
      tbl_resultado_dictamen: this.liqPenForm.get('tbl_resultado_dictamen')
        ?.value,
      resultado: this.liqPenForm.get('resultado')?.value,
      observaciones: this.liqPenForm.get('observaciones')?.value,
    };
    // console.log(LIQUIDOPENETRANTE);
    this.liquidoPenService
      .guardarLiquidoPenetrante(LIQUIDOPENETRANTE)
      .subscribe(
        (data) => {
          this.toastr.success(
            'El nuevo líquido penetrante se agregó con éxito!!!'
          );
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.liqPenForm.reset();
        }
      );
  }

  // traerAreasUnitarias() {
  //   // console.log('Trayendo Áreas Unitarias...');
  //   this.dataService.obtenerAreasUnitariasKm()
  //   .subscribe(
  //     (dataAU) => {
  //       // console.log(dataAU);
  //       this.listAreaUnitaria = dataAU;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  // Mat-Tabla
  displayedColumns: string[] = [
    'identificacion',
    'elemento_a',
    'elemento_b',
    'evaluacion',
    'longitud_total',
    'tipo_defecto',
    'dimension_defecto',
    'observaciones',
  ];

  // Checkbox
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceLP.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    // this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Article): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.identificacion + 1
    }`;
  }

  //=== Table =====================================
  //=== Button ====================================
  //=== Button ====================================

  agregarOpciones(form:any) {
    const selec = form.areaUnitaria.options;
    const combo = form.kilometro_inicial.options;
    combo.length = null;

    if (selec[0].selected == true) {
      let seleccionar = new Option("<-- esperando selección","");
      combo[0] = seleccionar;
    }

  }
}
export class Article {
  constructor(
    public identificacion: string,
    public elemento_a: string,
    public elemento_b: string,
    public evaluacion: number,
    public longitud_total: number,
    public tipo_defecto: string,
    public dimension_defecto: string,
    public observaciones: string,
    public select: boolean
  ) {}
}

// const ELEMENT_DATA: Element[] = [{ name: 'Arnold', item: 'Laptop', item2: 'Audífonos' }];
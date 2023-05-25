import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LiquidoPenetrante } from '../../models/liquidoPenetrante';
import { LiquidosPenetrantesService } from 'src/app/services/liquidos-penetrantes.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AreaUnitariaKm } from 'src/app/models/areaUnitariaKm';
import { AreaUnitariaKmService } from 'src/app/services/area-unitaria-km.service';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss'],
})
export class FormularyComponent implements OnInit {

  listAreaUnitaria: AreaUnitariaKm[] = [];

  liqPenForm: FormGroup;

  dataSource = new MatTableDataSource<Article>();
  selection = new SelectionModel<Article>(true, []);

  commentFC = new FormControl();
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

  selected = '-- Seleccione --';

  range = new FormGroup({
    fechaConstruccionStart: new FormControl<Date | null>(null),
    fechaConstruccionEnd: new FormControl<Date | null>(null),
  });

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
    private areaUniService: AreaUnitariaKmService
  ) {
    this.liqPenForm = this.fb.group({
      fechaConstruccionStart: [''],
      fechaConstruccionEnd: [''],
      numeroReporte: ['', Validators.required],
      sistema: ['', Validators.required],
      presionOperacion: ['', Validators.required],
      temperaturaOperacion: ['', Validators.required],
      claveAreaUnitaria: ['', Validators.required],
      kilometroInicial: ['', Validators.required],
      kilometroDestino: ['', Validators.required],
      descripcionObra: ['', Validators.required],
      nombreLineaTramo: ['', Validators.required],
      localizacionCoordenadas: ['', Validators.required],
      localizacionKilometraje: ['', Validators.required],
      desActividadesInspeccion: ['', Validators.required],
      diametro: ['', Validators.required],
      espesorNominal: ['', Validators.required],
      especificacion: ['', Validators.required],
      zonaInspeccionada: ['', Validators.required],
      tipoMaterial: ['', Validators.required],
      dimensiones: ['', Validators.required],
      descripcionPieza: ['', Validators.required],
      temperaturaPrueba: ['', Validators.required],
      acabadoSuperficial: ['', Validators.required],
      iluminacion: ['', Validators.required],
      materialAbsorbente: ['', Validators.required],
      codigoAplicable: ['', Validators.required],
      parte: ['', Validators.required],
      seccion: ['', Validators.required],
      procedimiento: ['', Validators.required],
      tecnicaMetodo: ['', Validators.required],
      aplicacion: ['', Validators.required],
      visible: ['', Validators.required],
      fluorescente: ['', Validators.required],
      tiempoPenetracion: ['', Validators.required],
      marcaPenetrante: ['', Validators.required],
      numLotePenetrante: ['', Validators.required],
      tiempoSecado: ['', Validators.required],
      marcaRemovedor: ['', Validators.required],
      numLoteRemovedor: ['', Validators.required],
      tiempoRevelado: ['', Validators.required],
      marcaRevelador: ['', Validators.required],
      numLoteMarca: ['', Validators.required],
      tipoGrupoPenetracion: ['', Validators.required],
      tipoPenetrante: ['', Validators.required],
      tipoRevelador: ['', Validators.required],
      referencia: ['', Validators.required],
      elemento: ['', Validators.required],
      descripcion: ['', Validators.required],
      identificacion: ['', Validators.required],
      tbl_identificacion: [''],
      tbl_elemento_a: [''],
      tbl_elemento_b: [''],
      tbl_evaluacion: [''],
      tbl_evaluacion_longitud: [''],
      tbl_tipo_defecto: [''],
      tbl_dimension_defecto: [''],
      tbl_observaciones: [''],
      tbl_resultado_dictamen: [''],
      resultado: ['', Validators.required],
      observaciones: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.traerAreasUnitarias();
    this.listAreaUnitaria.push(new AreaUnitariaKm(0,'', 0, '', '', '', '', '', ''));
    // console.log("Listar Area Unitaria:", this.listAreaUnitaria);
  }

  compararNombres( areaUnitariaKm1:AreaUnitariaKm, areaUnitariaKm2:AreaUnitariaKm) {
    if (areaUnitariaKm1==null || areaUnitariaKm2==null) {
      return false
    }
    return areaUnitariaKm1.area_unitaria===areaUnitariaKm2.area_unitaria;
  }

  agregarLiquidoPenetrante() {
    const LIQUIDOPENETRANTE: LiquidoPenetrante = {
      fechaConstruccionStart: this.liqPenForm.get('fechaConstruccionStart')
        ?.value,
      fechaConstruccionEnd: this.liqPenForm.get('fechaConstruccionEnd')?.value,
      numeroReporte: this.liqPenForm.get('numeroReporte')?.value,
      sistema: this.liqPenForm.get('sistema')?.value,
      presionOperacion: this.liqPenForm.get('presionOperacion')?.value,
      temperaturaOperacion: this.liqPenForm.get('temperaturaOperacion')?.value,
      claveAreaUnitaria: this.liqPenForm.get('claveAreaUnitaria')?.value,
      kilometroInicial: this.liqPenForm.get('kilometroInicial')?.value,
      kilometroDestino: this.liqPenForm.get('kilometroDestino')?.value,
      descripcionObra: this.liqPenForm.get('descripcionObra')?.value,
      nombreLineaTramo: this.liqPenForm.get('nombreLineaTramo')?.value,
      localizacionCoordenadas: this.liqPenForm.get('localizacionCoordenadas')
        ?.value,
      localizacionKilometraje: this.liqPenForm.get('localizacionKilometraje')
        ?.value,
      desActividadesInspeccion: this.liqPenForm.get('desActividadesInspeccion')
        ?.value,
      diametro: this.liqPenForm.get('diametro')?.value,
      espesorNominal: this.liqPenForm.get('espesorNominal')?.value,
      especificacion: this.liqPenForm.get('especificacion')?.value,
      zonaInspeccionada: this.liqPenForm.get('zonaInspeccionada')?.value,
      tipoMaterial: this.liqPenForm.get('tipoMaterial')?.value,
      dimensiones: this.liqPenForm.get('dimensiones')?.value,
      descripcionPieza: this.liqPenForm.get('descripcionPieza')?.value,
      temperaturaPrueba: this.liqPenForm.get('temperaturaPrueba')?.value,
      acabadoSuperficial: this.liqPenForm.get('acabadoSuperficial')?.value,
      iluminacion: this.liqPenForm.get('iluminacion')?.value,
      materialAbsorbente: this.liqPenForm.get('materialAbsorbente')?.value,
      codigoAplicable: this.liqPenForm.get('codigoAplicable')?.value,
      parte: this.liqPenForm.get('parte')?.value,
      seccion: this.liqPenForm.get('seccion')?.value,
      procedimiento: this.liqPenForm.get('procedimiento')?.value,
      tecnicaMetodo: this.liqPenForm.get('tecnicaMetodo')?.value,
      aplicacion: this.liqPenForm.get('aplicacion')?.value,
      visible: this.liqPenForm.get('visible')?.value,
      fluorescente: this.liqPenForm.get('fluorescente')?.value,
      tiempoPenetracion: this.liqPenForm.get('tiempoPenetracion')?.value,
      marcaPenetrante: this.liqPenForm.get('marcaPenetrante')?.value,
      numLotePenetrante: this.liqPenForm.get('numLotePenetrante')?.value,
      tiempoSecado: this.liqPenForm.get('tiempoSecado')?.value,
      marcaRemovedor: this.liqPenForm.get('marcaRemovedor')?.value,
      numLoteRemovedor: this.liqPenForm.get('numLoteRemovedor')?.value,
      tiempoRevelado: this.liqPenForm.get('tiempoRevelado')?.value,
      marcaRevelador: this.liqPenForm.get('marcaRevelador')?.value,
      numLoteMarca: this.liqPenForm.get('numLoteMarca')?.value,
      tipoGrupoPenetracion: this.liqPenForm.get('tipoGrupoPenetracion')?.value,
      tipoPenetrante: this.liqPenForm.get('tipoPenetrante')?.value,
      tipoRevelador: this.liqPenForm.get('tipoRevelador')?.value,
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
    console.log(LIQUIDOPENETRANTE);
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

  traerAreasUnitarias() {
    console.log('Trayendo Áreas Unitarias...');
    this.areaUniService.obtenerAreasUnitariasKm()
    .subscribe(
      (dataAU) => {
        console.log(dataAU);
        this.listAreaUnitaria = dataAU;
      },
      (error) => {
        console.log(error);
      }
    );
  }

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
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
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
    const selec = form.claveAreaUnitaria.options;
    const combo = form.kilometroInicial.options;
    combo.length = null;

    if (selec[0].selected == true) {
      let seleccionar = new Option("<-- esperando selección","");
      combo[0] = seleccionar;
    }

    if (selec[1].selected == true) {
      let kilometroInicial = new AreaUnitariaKm(0,'', 0, '', '', '', '', '', '');
      let popular2 = new AreaUnitariaKm(0,'', 0, '', '', '', '', '', '');
      combo[0] = kilometroInicial;
      combo[1] = popular2;
    }

    // if (selec[2].selected == true) {
    //   let academica1 = new Option("Musica del Barroco","Barroco");
    //   let academica2 = new Option("Musica del Siglo XX","Siglo XX");
    //   let academica3 = new Option("Música del Romantisismo","Romantico");
    //   combo[0] = academica1;
    //   combo[1] = academica2;
    //   combo[2] = academica3;
    // }
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
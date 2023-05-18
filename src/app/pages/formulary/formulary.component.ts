import { DataSource } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatTable } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss'],
})
export class FormularyComponent {

  // selection = new SelectionModel<PeriodicElement>(true, []);

  commentFC = new FormControl();
  onCommentChange() {
    console.log(this.commentFC.value);
  }
  commentDA = new FormControl();
  onCommentChangeDa() {
    console.log(this.commentDA.value);
  }commentOb = new FormControl();
  onCommentChangeOb() {
    console.log(this.commentOb.value);
  }

  selected = '-- Seleccione --';

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
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
    'borrar'
  ];
  data: Article[] = [
    new Article(1, 'Elemento A1', 'Elemento B1', 7.8, 16000, 'No conecta', 'Tres campos', 'Demasiados rangos de error'),
    new Article(2, 'Elemento A2', 'Elemento B2', 8.9, 32000, 'Sí conecta', 'Dos campos', 'Corregidos los rangos de error'),
    new Article(3, 'Elemento A3', 'Elemento B3', 9.0, 48000, 'No conecta', 'Cuatro campos', 'Más rangos de error')
  ];
  // data: Article[] = [
  //     new Article(1, 'Elemento A1', 'Elemento B1', 7.8, 16000, 'No conecta', 'Demasiados rangos de error'),
  //     new Article(2, 'Elemento A2', 'Elemento B2', 8.9, 32000, 'Sí conecta', 'Corregidos los rangos de error'),
  //     new Article(3, 'Elemento A3', 'Elemento B3', 9.0, 48000, 'No conecta', 'Más rangos de error')
  //   ];
  selectedarticle: Article = new Article(0, "", "", 0, 0, "", "", "");
  // selectedarticle: Article = new Article(0, "", "",  0, 0, "", "");


  @ViewChild(MatTable) table1!: MatTable<Article>;

  eraseRow(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
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
        // this.selectedarticle.select,
        )
    );
    this.table1.renderRows();
    this.selectedarticle = new Article(0, "", "", 0, 0, "", "", "");
    // this.selectedarticle = new Article(0, "", "",  0, 0, "", "");
  }

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  // Mat-Tabla
  displayedColumns: string[] = ['identificacion', 'elemento_a', 'elemento_b', 'evaluacion', 'longitud_total', 'tipo_defecto', 'dimension_defecto', 'observaciones',];
  dataToDisplay = [...ELEMENT_DATA];

  // Checkbox
  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.dataSource.data);

  //   /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }


  }

  //=== Table =====================================
  //=== Button ====================================
  //=== Button ====================================

  // dataSource = new ExampleDataSource(this.dataToDisplay);

  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  //   this.dataToDisplay = [
  //     ...this.dataToDisplay,
  //     ELEMENT_DATA[randomElementIndex],
  //   ];
  //   this.dataSource.setData(this.dataToDisplay);
  // }

  // removeData() {
  //   this.dataToDisplay = this.dataToDisplay.slice(0, -1);
  //   this.dataSource.setData(this.dataToDisplay);
  // }
// }

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
export class Article {
  constructor(
    public identificacion: number,
    public elemento_a: string,
    public elemento_b: string,
    public evaluacion: number,
    public longitud_total: number,
    public tipo_defecto: string,
    public dimension_defecto: string,
    public observaciones: string,
    // public select: boolean
  ) {}
}
import { Component, OnInit } from '@angular/core';
import { formularios } from 'src/app/mocks/data/datos';
import { Formulario } from 'src/app/models/formularios';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  lista: Formulario[] = formularios
  // lista: Formulario[] = [];

  constructor() {
    // this.lista = formularios;
    // console.log('Portadas->', this.lista);
  }

  ngOnInit(): void {
    // this.lista = this.lista.filter( f => f.id >= 2 );
    // console.log('Portadas con cambio->', this.lista);
    this.lista = formularios;
  }

}

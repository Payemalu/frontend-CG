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

  constructor() {}

  ngOnInit(): void {
    this.lista = formularios;
  }

}

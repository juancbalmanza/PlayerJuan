import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  datos: any[] = [];
  atributosDatos: any[] = [];
  busqueda: string = '';
  constructor() {
    this.datos = [
      {id: 1, nombre: 'Juan'},
      {id: 2, nombre: 'Prueba'},
      {id: 3, nombre: 'Juan Pru'},
      {id: 4, nombre: 'Juan Carlos'},
      {id: 5, nombre: 'Juan Crls'},
      {id: 6, nombre: 'Juan CARLOS'}
    ];

    this.atributosDatos = [
      {id: 'id'},
      {id: 'nombre'}
    ];
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { FuncionesComunesService } from 'src/app/compartido/servicios/funciones-comunes.service';
import { AuthLoginService } from 'src/app/compartido/servicios/auth-login.service';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  datos: any[] = [];
  atributosDatos: any[] = [];
  busqueda: string = '';
  usuario: any = {};
  subscripcion: any;
  ordenar: any = {ascendente: null, dato: 'nombre', tipo: 'texto'};
  arrowUp: any = faArrowUp;
  arrowDown: any = faArrowDown;
  constructor(public funciones: FuncionesComunesService, public authLogin: AuthLoginService) {
    this.subscripcion = this.authLogin.getUsuarioConsultado().subscribe(
      response => {
        this.usuario = response;
      }
    );

     this.datos = [
      {id: 1, nombre: 'Juan'},
      {id: 2, nombre: 'Prueba'},
      {id: 3, nombre: 'Juan Pru'},
      {id: 4, nombre: 'Juan Carlos'},
      {id: 5, nombre: 'suan Crls'},
      {id: 6, nombre: 'Juan CARLOS'}
    ];

    this.atributosDatos = [
      {id: 'id'},
      {id: 'nombre'}
    ];
  }

  ngOnInit(): void {

  }

  asignarOrdenar (dato: string, tipo: string) {
    if (this.ordenar.dato === dato) {
      this.ordenar = {ascendente: !this.ordenar.ascendente, dato, tipo};
    } else {
      this.ordenar = {ascendente: true, dato, tipo};
    }

  }

}

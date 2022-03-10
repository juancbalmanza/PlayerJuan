import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { FuncionesComunesService } from 'src/app/compartido/servicios/funciones-comunes.service';
import { AuthLoginService } from 'src/app/compartido/servicios/auth-login.service';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ConexionHttpService } from 'src/app/compartido/servicios/conexion-http.service';

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

  constructor(public funciones: FuncionesComunesService, public authLogin: AuthLoginService, public http: ConexionHttpService) {
    this.subscripcion = this.authLogin.getUsuarioConsultado().subscribe(
      response => {
        this.usuario = response;
        this.consultarDatos();
      }
    );

    this.atributosDatos = [
      {id: 'releaseYear'},
      {id: 'title'},
      {id: 'programType'}
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
    
  consultarDatos(): void {
    this.http.get('movies.json').subscribe(
      response => {
        this.datos = response.entries;
      }
    );
  }

}

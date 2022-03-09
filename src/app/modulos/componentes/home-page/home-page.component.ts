import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { FuncionesComunesService } from 'src/app/compartido/servicios/funciones-comunes.service';
import { AuthLoginService } from 'src/app/compartido/servicios/auth-login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  usuario: any = {};
  subscripcion: any;
  constructor(public funciones: FuncionesComunesService, public authLogin: AuthLoginService) {
    this.subscripcion = this.authLogin.getUsuarioConsultado().subscribe(
      response => {
        this.usuario = response;
      }
    );
  }

  ngOnInit(): void {

  }

}

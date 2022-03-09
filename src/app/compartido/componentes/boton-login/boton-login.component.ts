import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthLoginService } from '../../servicios/auth-login.service';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.scss']
})
export class BotonLoginComponent implements OnInit {

  constructor(public authServicio: AuthLoginService) {
    console.log(this.authServicio.authStatus);
  }

  ngOnInit(): void {
  }

  accionAuth(): void {
    console.log(this.authServicio.authStatus);
    if (this.authServicio.authStatus) {
      this.authServicio.accionLogout();
    } else {
      this.authServicio.accionLogin();
    }
  }

}

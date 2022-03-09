import { AuthService } from '@auth0/auth0-angular';
import { Injectable, EventEmitter } from '@angular/core';
import { FuncionesComunesService } from './funciones-comunes.service';


@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  authStatus: boolean = false;
  authLoading: boolean = true;
  usuarioConsultado: EventEmitter<any> = new EventEmitter();
  constructor(public auth: AuthService, public funciones: FuncionesComunesService) {
    this.statusAuth();
    this.loadingAuth();
  }

  statusAuth(): void {
    this.auth.isAuthenticated$.subscribe(
      response => {
        this.authStatus = response;
        if (!response) {
          this.funciones.irA('login');
        } else {
          this.usuarioAuth();
        }
      }
    );
  }

  loadingAuth(): void {
    this.auth.isLoading$.subscribe(
      response => {
        this.authLoading = response;
      }
    );
  }

  usuarioAuth(): void {
    this.auth.getUser().subscribe(
      response => {
        this.usuarioConsultado.emit(response);
      }
    );
  }

  getUsuarioConsultado(): EventEmitter<any> {
    return this.usuarioConsultado;
  }

  accionLogin (): void {
    this.auth.loginWithRedirect()
  }

  accionLogout (): void {
    this.auth.logout();
  }
}

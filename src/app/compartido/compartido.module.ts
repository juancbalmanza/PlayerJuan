import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { AuthModule } from '@auth0/auth0-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BotonLoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AuthModule.forRoot(
      {
        domain: environment.credencialesAuth0.domain,
        clientId: environment.credencialesAuth0.clientId,
        cacheLocation: 'localstorage',
        useRefreshTokens: true
      }
    )
  ],
  exports: [
    BotonLoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class CompartidoModule { }

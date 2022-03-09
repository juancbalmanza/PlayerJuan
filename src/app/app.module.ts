import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CompartidoModule } from './compartido/compartido.module';
import { LoginComponent } from './modulos/componentes/login/login.component';
import { HomePageComponent } from './modulos/componentes/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CompartidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

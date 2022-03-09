import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from '@auth0/auth0-angular';
import { CompartidoModule } from './compartido/compartido.module';
import { LoginComponent } from './modulos/componentes/login/login.component';
import { HomePageComponent } from './modulos/componentes/home-page/home-page.component';
import { FiltroPipe } from './compartido/pipes/filtro.pipe';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    FiltroPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CompartidoModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, FiltroPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

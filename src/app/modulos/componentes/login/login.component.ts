import { Component, OnInit } from '@angular/core';
import { FuncionesComunesService } from 'src/app/compartido/servicios/funciones-comunes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public funciones: FuncionesComunesService) { }

  ngOnInit(): void {
  }

}

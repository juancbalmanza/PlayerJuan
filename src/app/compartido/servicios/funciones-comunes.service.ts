import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FuncionesComunesService {

  constructor(public router: Router) { }

  irA (ruta: string, replace: boolean = false): void {
    if (replace) {
      this.router.navigate([ruta], { replaceUrl: true });
    } else {
      this.router.navigate([ruta]);
    }
  }

  obtenerHeight(cantidad: number): number {
    return (window.innerHeight) - cantidad;
  }
}

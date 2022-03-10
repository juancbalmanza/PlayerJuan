import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any[], atributo: any): any {
    let respuesta = value;
    if (atributo.ascendente) {
      if (atributo.tipo === 'numero') {
        respuesta = value.sort((a, b) => a[atributo.dato] - b[atributo.dato]);
      } else if (atributo.tipo === 'texto') {
        respuesta = value.sort((a, b) => a[atributo.dato].toLowerCase().localeCompare(b[atributo.dato].toLowerCase()));
      }
    } else if (atributo.ascendente === false) {
      if (atributo.tipo === 'numero') {
        respuesta = value.sort((a, b) => b[atributo.dato] - a[atributo.dato]);
      } else if (atributo.tipo === 'texto') {
        respuesta = value.sort((a, b) => b[atributo.dato].toLowerCase().localeCompare(a[atributo.dato].toLowerCase()));
      }
    }
    return respuesta;
  }

}

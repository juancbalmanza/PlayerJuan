import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  /**
   * Función para realizar filtros de arreglo de datos.
   * @param value Dato tomado desde la vista.
   * @param columnas Array de columnas a comparar minima estructura {'id': 'nombre de la columna'}
   * @param variable Atributo asignado en el ngModel del input busqueda el cual se comparará con los datos de las columnas.
   */
  transform(value: any[], columnas: any[] | any, variable: string): any {
    let respuesta = value;
    if (variable !== '' && variable !== null && variable !== undefined) {
      respuesta = value.filter(x => {
        x.busqueda = variable;
        let mostrar = false;
        for (let i = 0; i < columnas.length; i++) {
          const columna = columnas[i];
          if (x[columna.id] !== undefined) {
            if (((x[columna.id] + '').toLowerCase()).indexOf(variable.toLowerCase()) > -1) {
              mostrar = true;
              break;
            }
          } else {
            mostrar = true;
          }
        }
        return mostrar;
      });
    } else {
        respuesta = value.filter(x => {
            return true;
        });
    }
    return respuesta;
  }
}

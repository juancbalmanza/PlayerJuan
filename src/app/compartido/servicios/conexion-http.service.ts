import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionHttpService {

  endPointTuOrden: string = environment.apiPath;
  constructor(private http: HttpClient) {

  }

  get(url: any): Observable<any> {
    return this.http.get(this.endPointTuOrden + url);
}
}

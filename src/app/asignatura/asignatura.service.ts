import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignatura } from './asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
   api=URL_SERVICIOS;
   private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(
    private http:HttpClient
  ) { }
  lista(): Observable<any>{
    return this.http.get<any>(this.api+"/asignatura/listar")

  }
 

  registrarAsignatura(asignatura: Asignatura): Observable<any>{
    console.log(asignatura);
    
    return this.http.post<Asignatura>(this.api+"/asignatura/registrar",asignatura,{headers: this.httpHeaders})
  }
}

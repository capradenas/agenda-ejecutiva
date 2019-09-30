import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { }

  async listar(token: string){
    let endpoint = `http://localhost:4002/planificador-agentes/empresas-asociadas`;
    return this.http.get(endpoint, {
      headers:{
        "Token": token
      }
    })
  }
}
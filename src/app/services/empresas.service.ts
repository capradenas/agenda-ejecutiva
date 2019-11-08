import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UserInfo from '../models/user-info.interface';
import FormAgendaModel from '../models/form-agenda.model';
import Agenda from '../models/agenda.model';
import { EventInput } from '@fullcalendar/core';
import { environment } from "./../../environments/environment";
import { Gestion } from '../models/gestion.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) {}

  async listar(token: string){
    let endpoint = `${environment.apiUrl}/planificador-agentes/empresas-asociadas`;
    return this.http.get(endpoint, {
      headers:{
        "Token": token
      }
    })
  }

  async registrarCita(userInfo: UserInfo, formAgendaData: FormAgendaModel){
    let endpoint = `${environment.apiUrl}/planificador-agentes/planificar`;
    return this.http.post<Agenda>(endpoint, formAgendaData, {
      headers: {
        'rutEjecutivo': `${userInfo.rutEjecutivo}`,
        'codigoSucursal': `${userInfo.codigoSucursal}`,
        'token': userInfo.token
      }
    });
  }


  async listarCitas(userInfo: UserInfo, query: any){
    
    let params = '';
    if('anexo' in query){
      params = `?anexo=${query.anexo}`;
    }
    let endpoint = `${environment.apiUrl}/planificador-agentes/eventos${params}`;
  
    return this.http.get<EventInput[]>(endpoint, {
      headers: {
        'rutejecutivo': `${userInfo.rutEjecutivo}`,
        'codigosucursal': `${userInfo.codigoSucursal}`
      }
    });
  }


  async obtenerDetalleAgenda(id: number){
    let endpoint = `${environment.apiUrl}/planificador-agentes/agenda/${id}`;
    return this.http.get(endpoint, {});
  }


  async obtenerContactosCompania(punto: number){
    let endpoint = `${environment.apiUrl}/compania/leads?punto_atencion_codigo=${punto}`;
    return this.http.get(endpoint, {});
  }

  async registrarGestion(userInfo: UserInfo, gestionInfo: Gestion){
    let endpoint = `${environment.apiUrl}/planificador-agentes/gestionar`;
    return this.http.post<Gestion>(endpoint, gestionInfo, {
      headers: {
        'rutEjecutivo': `${userInfo.rutEjecutivo}`,
        'codigoSucursal': `${userInfo.codigoSucursal}`,
        'token': userInfo.token
      }
    });
  }
}
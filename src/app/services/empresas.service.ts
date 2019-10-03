import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UserInfo from '../models/user-info.interface';
import FormAgendaModel from '../models/form-agenda.model';
import Agenda from '../models/agenda.model';
import { EventInput } from '@fullcalendar/core';

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

  async registrarCita(userInfo: UserInfo, formAgendaData: FormAgendaModel){
    let endpoint = `http://localhost:4002/planificador-agentes/planificar`;
    return this.http.post<Agenda>(endpoint, formAgendaData, {
      headers: {
        'rutEjecutivo': `${userInfo.rutEjecutivo}`,
        'codigoSucursal': `${userInfo.codigoSucursal}`,
        'token': userInfo.token
      }
    });
  }


  async listarCitas(userInfo: UserInfo){
    let endpoint = 'http://localhost:4002/planificador-agentes/eventos';
    return this.http.get<EventInput[]>(endpoint, {
      headers: {
        'rutejecutivo': `${userInfo.rutEjecutivo}`,
        'codigosucursal': `${userInfo.codigoSucursal}`
      }
    });
  }
}
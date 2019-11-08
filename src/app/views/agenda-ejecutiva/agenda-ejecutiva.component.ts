import { Component, ViewChild, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { CookieService } from 'ngx-cookie-service';
import { EmpresasService } from 'src/app/services/empresas.service';
import UserInfo from 'src/app/models/user-info.interface';

@Component({
  selector: 'app-agenda-ejecutiva',
  templateUrl: './agenda-ejecutiva.component.html',
  styleUrls: ['./agenda-ejecutiva.component.scss']
})
export class AgendaEjecutivaComponent implements OnInit  {
  

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private companiaService: EmpresasService
    ){}

  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];
  locale = esLocale;
  ruta = ['Agenda'];
  companiaSeleccionada='';
  userInfo: UserInfo;

  async ngOnInit() {
    if(!this.cookieService.check('Token')){
      alert('No hay usuario desde MDN, Se debe Salir')
      //return false;
    }
    this.userInfo = {
      rutEjecutivo: this.cookieService.get('Rut'), 
      codigoSucursal: Number.parseInt(this.cookieService.get('Oficina')),
      token: this.cookieService.get('Token') 
    };

    let citasRs = await this.companiaService.listarCitas(this.userInfo, {});
    citasRs.subscribe(
      citas => {
        this.calendarEvents = citas
      },
      error=>{
        console.log({error})
      }
    )
  }
  
  handleDateClick(arg) {
    if (confirm('¿Quieres agregar un evento para el momento: ' + arg.dateStr + ' ?')) {
      
      if(this.companiaSeleccionada!==''){
        this.router.navigateByUrl(`/planificador/nueva-cita/${arg.dateStr}/${this.companiaSeleccionada}`);
      }else{
        this.router.navigateByUrl(`/planificador/nueva-cita/${arg.dateStr}`);
      }
    }
  }

  handleEventClick(arg){
    this.router.navigateByUrl(`/planificador/editar-cita/${arg.event.groupId}`);
  }

  async handleCompanyChange(value: any){
    this.companiaSeleccionada = value;
    
    let citasRs = await this.companiaService.listarCitas(this.userInfo, { anexo: value });
    
    if(value != null){
      citasRs.subscribe(
        citas => {
          this.calendarEvents = citas
        },
        error=>{
          console.log({error})
        }
      )
    }
    
  }

  async hndleCompanyClear(){
    let citasRs = await this.companiaService.listarCitas(this.userInfo, {});
    citasRs.subscribe(
      citas => {
        this.calendarEvents = citas
      },
      error=>{
        console.log({error})
      }
    )
  }
}
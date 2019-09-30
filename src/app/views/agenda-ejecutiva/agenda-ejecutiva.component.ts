import { Component, ViewChild, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-agenda-ejecutiva',
  templateUrl: './agenda-ejecutiva.component.html',
  styleUrls: ['./agenda-ejecutiva.component.scss']
})
export class AgendaEjecutivaComponent implements OnInit  {
  

  constructor(
    private router: Router,
    private cookieService: CookieService
    ){}

  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];
  //[{ id: 1, title: 'Event Now', start: new Date() }];
  locale = esLocale;
  ruta = ['Agenda'];
  companiaSeleccionada='';

  async ngOnInit() {
    if(!this.cookieService.check('Token')){
      alert('No hay usuario desde MDN, Se debe Salir')
    }
    //console.log({data})
  }
  
  handleDateClick(arg) {
    if (confirm('¿Quieres agregar un evento para el momento: ' + arg.dateStr + ' ?')) {
      
      if(this.companiaSeleccionada!==''){
        this.router.navigateByUrl(`/planificador/nueva-cita/${arg.dateStr}/${this.companiaSeleccionada}`);
      }else{
        this.router.navigateByUrl(`/planificador/nueva-cita/${arg.dateStr}`);
      }
      
      
      /*this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })*/
    }
  }

  handleEventClick(arg){
    console.log({arg});
    this.router.navigateByUrl(`/planificador/editar-cita/${arg.event.id}`);
  }

  handleCompanyChange(value: string){
    //console.log({value});

    this.companiaSeleccionada = value;


  }
}
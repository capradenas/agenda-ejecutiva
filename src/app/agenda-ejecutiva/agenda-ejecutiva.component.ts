import { Component, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-agenda-ejecutiva',
  templateUrl: './agenda-ejecutiva.component.html',
  styleUrls: ['./agenda-ejecutiva.component.scss']
})
export class AgendaEjecutivaComponent  {

  constructor(private router: Router){}

  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { id: 1, title: 'Event Now', start: new Date() }
  ];
  locale = esLocale;
  ruta = ['Agenda'];

  
  handleDateClick(arg) {
    if (confirm('¿Quieres agregar un evento para el momento: ' + arg.dateStr + ' ?')) {
      
      
      this.router.navigateByUrl(`/planificador/nueva-cita/${arg.dateStr}`);
      
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
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AgendaEjecutivaComponent } from './agenda-ejecutiva.component';
import { DetalleAgendaComponent } from './detalle-agenda/detalle-agenda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UbicatorComponent } from './components/ubicator/ubicator.component';



@NgModule({
  declarations: [
    AgendaEjecutivaComponent,
    DetalleAgendaComponent,
    UbicatorComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AgendaEjecutivaModule { }

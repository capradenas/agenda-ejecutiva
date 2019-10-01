import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaEjecutivaComponent } from './views/agenda-ejecutiva/agenda-ejecutiva.component';
import { DetalleAgendaComponent } from './views/detalle-agenda/detalle-agenda.component';
import { UbicatorComponent } from './components/ubicator/ubicator.component';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { CompaniasAsociadasComponent } from './components/companias-asociadas/companias-asociadas.component';
import { PrevisualizadorComponent } from './components/previsualizador/previsualizador.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaEjecutivaComponent,
    DetalleAgendaComponent,
    UbicatorComponent,
    CompaniasAsociadasComponent,
    PrevisualizadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FullCalendarModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaEjecutivaComponent } from "./agenda-ejecutiva/agenda-ejecutiva.component";
import { DetalleAgendaComponent } from './agenda-ejecutiva/detalle-agenda/detalle-agenda.component';


const routes: Routes = [
  {
    path:'', 
    component: AgendaEjecutivaComponent,
  },
  {
    path: 'planificador/:type/:wildcard',
    component: DetalleAgendaComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

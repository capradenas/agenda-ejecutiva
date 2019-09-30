import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaEjecutivaComponent } from "./views/agenda-ejecutiva/agenda-ejecutiva.component";
import { DetalleAgendaComponent } from './views/detalle-agenda/detalle-agenda.component';


const routes: Routes = [
  {
    path:'', 
    component: AgendaEjecutivaComponent,
  },
  {
    path: 'planificador/:type/:wildcard',
    component: DetalleAgendaComponent,
  },
  {
    path: 'planificador/:type/:wildcard/:company',
    component: DetalleAgendaComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

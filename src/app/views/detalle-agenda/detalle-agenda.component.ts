import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'; 
import { CookieService } from 'ngx-cookie-service';
import { EmpresasService } from './../../services/empresas.service';
import Agenda from 'src/app/models/agenda.model';


@Component({
  selector: 'app-detalle-agenda',
  templateUrl: './detalle-agenda.component.html',
  styleUrls: ['./detalle-agenda.component.scss']
})
export class DetalleAgendaComponent implements OnInit {

  eventForm: FormGroup;
  ruta = ['Agenda'];
  fechasVisita: Date[];
  

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private empresaService: EmpresasService,
  ) { 

    this.eventForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      company: ['', Validators.required],
      comments: '',
      periodicity: ['', Validators.required],
    });
    
  }

  async ngOnInit() {

    if(!this.cookieService.check('Rut')){
      alert('No hay usuario desde MDN, Se debe Salir')
    }

    let wildcard = this.route.snapshot.paramMap.get('wildcard');
    let type = this.route.snapshot.paramMap.get('type');
    let company = this.route.snapshot.paramMap.get('company');

    if(type === 'nueva-cita'){
      this.ruta.push('Nueva Cita');

      let momento = moment(wildcard);
      let f = momento.toArray();


      this.eventForm.setValue({
        startDate: { year: f[0], month: (f[1]+1), day: f[2], _d: momento.toDate() },
        company: company,
        comments: '',
        periodicity: ''
      });



    }else if(type === 'editar-cita'){
      this.ruta.push('Modificar Cita');
      console.log('editar')
    }
  }

  async onSubmit(formData: any) {

    const userInfo = {
      rutEjecutivo: this.cookieService.get('Rut'), 
      codigoSucursal: Number.parseInt(this.cookieService.get('Oficina')),  
      token: this.cookieService.get('Token')
    };
    const frmd = { 
      anexoEmpresa: formData.company, 
      comentarios: formData.comments, 
      periocidad: formData.periodicity, 
      fechaPrimeraCita: formData.startDate._d, 
      citas: this.fechasVisita
    };

    let res = await this.empresaService.registrarCita(userInfo, frmd);

  
    res.subscribe(
      (agen: Agenda) => {
        console.log({ agen })
        alert('Datos Guardados con Exito');
        this.goToHome();
        
      },
      (error: any)=>{
        console.log({ error })
      }
    );
  }

  goToHome(){
    this.router.navigateByUrl('');
  }

  recibeFechas(lasFechas: any){
    this.fechasVisita = lasFechas.map((f:any)=>f.date);
  }

}

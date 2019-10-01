import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'; 
import { CookieService } from 'ngx-cookie-service';
import { EmpresasService } from './../../services/empresas.service';


@Component({
  selector: 'app-detalle-agenda',
  templateUrl: './detalle-agenda.component.html',
  styleUrls: ['./detalle-agenda.component.scss']
})
export class DetalleAgendaComponent implements OnInit {

  eventForm: FormGroup;
  ruta = ['Agenda'];
  

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService
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
        startDate: { year: f[0], month: (f[1]+1), day: f[2] },
        company: company,
        comments: '',
        periodicity: ''
      });



    }else if(type === 'editar-cita'){
      this.ruta.push('Modificar Cita');
      console.log('editar')
    }
  }

  onSubmit(formData) {
    
    
    this.eventForm.reset({
      company: '',
      comments: '',
      periodicity: ''
    });
  }

  goToHome(){
    this.router.navigateByUrl('');
  }



}

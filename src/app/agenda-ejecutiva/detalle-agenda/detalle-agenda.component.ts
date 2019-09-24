import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-detalle-agenda',
  templateUrl: './detalle-agenda.component.html',
  styleUrls: ['./detalle-agenda.component.scss']
})
export class DetalleAgendaComponent implements OnInit {

  eventForm: FormGroup;
  ruta = ['Agenda'];
  horasDelDia = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 

    this.eventForm = this.formBuilder.group({
      startDate: '',
      startHour: '',
      company: '',
      comments: '',
    });

    let start = moment('09:00', 'HH:mm');
    let end = moment('19:00', 'HH:mm')
    
    while(start <= end){
      this.horasDelDia.push(start.format('HH:mm'));
      start.add(30, 'minutes');
    }
  }

  ngOnInit() {
    let wildcard = this.route.snapshot.paramMap.get('wildcard');
    let type = this.route.snapshot.paramMap.get('type');

    if(type === 'nueva-cita'){
      console.log('nueva')
      this.ruta.push('Nueva Cita');

      let momento = new Date(wildcard);

      console.warn('El Momento es', momento)

      


      this.eventForm.setValue({
        startDate: { year: momento.getFullYear(), month: momento.getMonth(), day: momento.getDay() },
        startHour: '',
        company: '',
        comments: ''
      })

    }else if(type === 'editar-cita'){
      this.ruta.push('Modificar Cita');
      console.log('editar')
    }
  }

  onSubmit(formData) {
    console.log({
      ef: this.eventForm.value
    })
    console.warn('lainformaciondeestoes', formData);
    
    
    
    this.eventForm.reset();
  }

  gotToHome(){
    this.router.navigateByUrl("");
  }



}

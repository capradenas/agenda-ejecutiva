import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detalle-agenda',
  templateUrl: './detalle-agenda.component.html',
  styleUrls: ['./detalle-agenda.component.scss']
})
export class DetalleAgendaComponent implements OnInit {

  eventForm: FormGroup;

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
  }

  ngOnInit() {
    let wildcard = this.route.snapshot.paramMap.get('wildcard');
    let type = this.route.snapshot.paramMap.get('type');

    if(type === 'nueva-cita'){
      console.log('nueva')

      let momento = new Date(wildcard);

      console.warn('El Momento es', momento)

      this.eventForm.setValue({
        startDate: momento.toLocaleDateString(),
        startHour: momento.toLocaleTimeString(),
        company: '',
        comments: ''
      })

    }else if(type === 'editar-cita'){
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

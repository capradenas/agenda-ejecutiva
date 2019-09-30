import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ubicator',
  templateUrl: './ubicator.component.html',
  styleUrls: ['./ubicator.component.scss']
})
export class UbicatorComponent implements OnInit {

  @Input() rutas: string[];


  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-item-rank',
  templateUrl: './item-rank.component.html',
  styleUrls: ['./item-rank.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ItemRankComponent),
    }

  ]
})
export class ItemRankComponent implements ControlValueAccessor {
  
  
  @Input() nombre: string;
  @Input() titulo: string;
  @Input() leyenda: string;
  valor: string;
  
  constructor() { }

  _onChange(val: string): any {}

  _onTouch(): any {}

  writeValue(val: string): void {
    this.valor = val || '';
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  myChange(){
    this._onTouch();
    this._onChange(this.valor);
  }

}

import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  public hoursOfDayArray(start, end, interval = 30){
    start = moment(start, 'HH:mm');
    end = moment(end, 'HH:mm')
    let hours = [];
    while(start <= end){
      hours.push(start.format('HH:mm'));
      start.add(interval, 'minutes');
    }

    return hours;
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {
  time:any=0;
  setTime(timer){
    this.time=timer
    console.log(this.time)
  }
  getTime(){
    return this.time
  }
  returnTime(){
    this.time=0
  }
  constructor() { }

}
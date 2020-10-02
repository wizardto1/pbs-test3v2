import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private timeService: TimeService) { }

  ngOnInit() {
  }
  display:any=0;
time: number = 0;
  minutes:number=  0;
  seconds:number= 0;
  play:boolean=false;
  
interval;
SetTime(event:any){
    this.display=event.target.value
    this.timeService.setTime(this.display)
  }


start() {
  if (this.play==false){
  this.play = true;
  this.interval = setInterval(() => {
    this.time++;
    
        
        
        this.seconds = this.time
        
        /** 
        if (Number(this.minutes) < 10) {
          this.minutes = '0' + this.minutes;
        } else {
          this.minutes = '' + this.minutes;
        }
        if (Number(this.seconds) < 10) {
          this.seconds = '0' + this.seconds;
        } else {
          this.seconds = '' + this.seconds;
        }*/
        
  },1000)
  }
}

stop() {
  this.play = false;
  clearInterval(this.interval);
  this.timeService.setTime(this.time);
  this.display=this.time;
}
reset(){
  this.play=false;
  clearInterval(this.interval);
  this.time=0;
  this.seconds=0;
  this.minutes=0;
  
}
}
import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component implements OnInit {
flag;
flag2="-";
  time="-";
  note="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private timeService: TimeService, private router: Router) { }

  setScore6(flag){
    this.scoresService.setScore6(flag)
    this.scoresService.setButton6(this.buttonDisabled)
  this.time=this.timeService.getTime()
     this.scoresService.setnote6(this.note)
     this.scoresService.setLeg3(this.flag2)
     this.scoresService.settime4(this.time)
    this.scoresService.Up1()
     if (this.flag=='1'){
        this.scoresService.Reset0()
     }
      if (this.scoresService.GetCounter()==3){
        this.scoresService.SetZeroEnd();
        this.router.navigate(['/results']);
      }
      else{
        this.timeService.returnTime();
        this.router.navigate(['/page7']);
      }
  }
    EndTest(){
    this.scoresService.SetEnd();
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
    OnInput3 (event:any){
      this.flag2 = event.target.value;
      console.log(this.flag2)
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore6();
this.buttonDisabled=this.scoresService.getButton6()
this.time="-"
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
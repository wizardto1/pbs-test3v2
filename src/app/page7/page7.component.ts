import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})
export class Page7Component implements OnInit {
flag;
flag2="-";
  time="-";
  note="-"
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private timeService: TimeService,private router: Router) { }

  setScore7(flag){
    this.scoresService.setScore7(flag)
    this.scoresService.setButton7(this.buttonDisabled)
     this.time=this.timeService.getTime()
     this.scoresService.setnote7(this.note)
     this.scoresService.setLeg4(this.flag2)
     this.scoresService.settime5(this.time)
     this.scoresService.Up1();
    
      if (this.flag==1){
        this.scoresService.Reset0()
       
     }
      if (this.scoresService.GetCounter()==3){
        this.scoresService.SetZeroEnd();
        this.router.navigate(['/results']);
      }
      else{
        this.timeService.returnTime();
        this.router.navigate(['/page8']);
      }

  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
    OnInput2 (event:any){
      this.note = event.target.value;
      
    }
    OnInput3 (event:any){
      this.flag2 = event.target.value;
      
    }
      EndTest(){
    this.scoresService.SetEnd();
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore7();
this.buttonDisabled=this.scoresService.getButton7()
this.time="-"
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
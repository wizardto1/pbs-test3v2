import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page21',
  templateUrl: './page21.component.html',
  styleUrls: ['./page21.component.css']
})
export class Page21Component implements OnInit {
flag;
  time="-";
  note="-"
  flag2="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private timeService: TimeService, private router: Router) { }

  setScore21(flag){
    this.scoresService.setScore21(flag)
    this.scoresService.setLeg8(this.flag2)
    this.time=this.timeService.getTime()
    this.scoresService.settime15(this.time) 
    this.scoresService.setnote21(this.note)  
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
        this.router.navigate(['/page22']);
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
  ngOnInit() {
  
this.flag=this.scoresService.getScore21()
this.flag2=this.scoresService.getLeg8()
this.time="-"

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
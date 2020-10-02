import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.css']
})
export class Page9Component implements OnInit {
flag;
note="-";
  time="-";
  buttonDisabled:boolean=false;
 constructor(private scoresService: ScoresService, private timeService: TimeService, private router: Router) { }

  setScore9(flag){
    this.scoresService.setScore9(flag)
    this.scoresService.setButton9(this.buttonDisabled)
    this.time=this.timeService.getTime()
     this.scoresService.settime7(this.time)
    this.scoresService.setnote9(this.note)
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
        this.router.navigate(['/page10']);
      }
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
    OnInput2 (event:any){
      this.note = event.target.value;
      
    }
      EndTest(){
    this.scoresService.SetEnd();
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore9();
this.buttonDisabled=this.scoresService.getButton9()
this.time="-"
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
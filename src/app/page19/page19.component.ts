import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page19',
  templateUrl: './page19.component.html',
  styleUrls: ['./page19.component.css']
})
export class Page19Component implements OnInit {
flag;
  time="-";
  flag2="-";
  note="-";
  buttonDisabled:boolean=false;
 constructor(private scoresService: ScoresService, private timeService:TimeService, private router: Router) { }

  setScore19(flag){
    this.scoresService.setScore19(flag);
    this.scoresService.setLeg7(this.flag2);
    this.time=this.timeService.getTime()
    this.scoresService.settime13(this.time);
    this.scoresService.setnote19(this.note);
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
        this.router.navigate(['/page20']);
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
  
this.flag=this.scoresService.getScore19();
this.flag2=this.scoresService.getLeg7();

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
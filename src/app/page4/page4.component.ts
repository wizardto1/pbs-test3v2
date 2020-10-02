import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
flag;
  time="-";
  note="-"
  flag2;
  
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private timeService: TimeService, private router: Router) { }

  setScore4(flag){
    this.scoresService.setScore4(flag)
    this.scoresService.setButton4(this.buttonDisabled)
     this.time=this.timeService.getTime()
     this.scoresService.setnote4(this.note)
     this.scoresService.settime3(this.time)
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
        this.router.navigate(['/page5']);
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
  
this.flag=this.scoresService.getScore4();
this.buttonDisabled=this.scoresService.getButton4()
this.time="-"
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
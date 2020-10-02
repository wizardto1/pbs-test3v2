import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
flag;
note="-";
  time="-";
  buttonDisabled:boolean=false;
  skip;
  constructor(private scoresService: ScoresService, private timeService: TimeService) { }

  setScore3(flag){
    this.scoresService.setScore3(flag)
    this.scoresService.setButton3(this.buttonDisabled)
    this.time=this.timeService.getTime()
       this.scoresService.Up1();
      
      if (this.flag==1){
        this.scoresService.Reset0()
     }
    
     this.scoresService.setnote3(this.note)
     this.scoresService.settime2(this.time)
     this.timeService.returnTime();
  }
  
  
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
      EndTest(){
    this.scoresService.SetEnd();
  }
  
  ngOnInit() {
  
this.flag=this.scoresService.getScore3();
this.buttonDisabled=this.scoresService.getButton3()
this.time="-"
if (this.scoresService.GetOneSkip()==true){
  this.skip="<p>Skipped to Question 3</p>"
}
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
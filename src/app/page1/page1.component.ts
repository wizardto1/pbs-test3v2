import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  flag;
  
  flag2="-";
  time;
  note="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private timeService:TimeService, private router: Router ) { }

  setScore1(flag){
    this.scoresService.setScore1(flag)
    this.scoresService.setButton1(this.buttonDisabled)
    this.scoresService.setLeg1(this.flag2);
    this.time=this.timeService.getTime();
    this.scoresService.settime1(this.time);
    this.scoresService.setnote1(this.note);
    console.log(this.time)
    
   
  }
  gotoPage(flag){
    
    if (flag=="no"){
      this.scoresService.setScore2("skipped");
      this.scoresService.Up1();
      this.scoresService.SetOneSkip();
      this.timeService.returnTime();
    this.router.navigate(['/page3']); }
    else{
      this.timeService.returnTime();
      this.router.navigate(['/page2']);}
    }
   
    OnInput2 (event:any){
      this.note = event.target.value;
      console.log(this.note)
    }
  SetTime(event:any){
    event.target.value=this.timeService.getTime()
  }
  EndTest(){
    this.scoresService.SetEnd();
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore1()
this.buttonDisabled=this.scoresService.getButton1()
this.flag2=this.scoresService.getLeg1()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page12',
  templateUrl: './page12.component.html',
  styleUrls: ['./page12.component.css']
})
export class Page12Component implements OnInit {
flag;
  time="-";
  note="-";
  skip;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService,private timeService: TimeService, private router: Router) { }

  setScore12(flag){
    this.scoresService.setScore12(flag)
    this.scoresService.setButton12(this.buttonDisabled)
    this.time=this.timeService.getTime()
    this.scoresService.setnote12(this.note)
    this.scoresService.settime9(this.time)
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
        this.router.navigate(['/page13']);
      }
  }
  OnInput (event:any){
      this.note = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
      EndTest(){
    this.scoresService.SetEnd();
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore12()
this.buttonDisabled=this.scoresService.getButton12()
this.time="-"
if (this.scoresService.GetTwoSkip()==true){
  this.skip='<p>Skipped to Question 10</p>'
}
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
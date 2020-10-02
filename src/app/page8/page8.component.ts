import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.css']
})
export class Page8Component implements OnInit {
flag;
  time="-";
  flag2='-';
  note="-";
  skip;
  buttonDisabled:boolean=false;
constructor(private scoresService: ScoresService, private timeService: TimeService, private router: Router) { }

  setScore8(flag){
    this.scoresService.setScore8(flag)
    this.scoresService.setButton8(this.buttonDisabled)
    this.scoresService.setDevice1(this.flag2)
     this.time=this.timeService.getTime();
     this.scoresService.SetTwoSkip2();
     this.scoresService.setnote8(this.note)
     this.scoresService.settime6(this.time)
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
        this.router.navigate(['/page9']);
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
  
this.flag=this.scoresService.getScore8();
this.flag=this.scoresService.getDevice1();
this.buttonDisabled=this.scoresService.getButton8()
this.time="-"
if (this.scoresService.GetTwoSkip()==true){
  this.skip='<p>Skipped to Question 6</p>'
}
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }

}
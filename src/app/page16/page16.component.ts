import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page16',
  templateUrl: './page16.component.html',
  styleUrls: ['./page16.component.css']
})
export class Page16Component implements OnInit {
flag;
note="-";
  time="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private timeService: TimeService,private router: Router) { }

  setScore16(flag){
    this.scoresService.setScore16(flag)
    this.time=this.timeService.getTime()
    this.scoresService.setnote16(this.note)
    this.scoresService.settime12(this.time)
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
        this.router.navigate(['/page17']);
      }
    
  }
    EndTest(){
    this.scoresService.SetEnd();
  }
  OnInput(event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore16()
this.time="-"

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
flag;
  time;
  note="-";
  buttonDisabled:boolean=false;
   constructor(private scoresService: ScoresService, private router: Router) { }

  setScore5(flag){
    this.scoresService.setScore5(flag)
    this.scoresService.setButton5(this.buttonDisabled)
     this.scoresService.setnote5(this.flag)
     this.scoresService.Up1()
     if (this.flag=='1'){
        this.scoresService.Reset0()
     }
      if (this.scoresService.GetCounter()==3){
        this.scoresService.SetZeroEnd();
        this.router.navigate(['/results']);
      }
      else{
        this.router.navigate(['/page6']);
      }
  }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
      EndTest(){
    this.scoresService.SetEnd();
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore5();
this.buttonDisabled=this.scoresService.getButton5()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page13',
  templateUrl: './page13.component.html',
  styleUrls: ['./page13.component.css']
})
export class Page13Component implements OnInit {
flag;
  time;
  note="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private router: Router) { }

  setScore13(flag){
    this.scoresService.setScore13(flag)
    this.scoresService.setButton13(this.buttonDisabled)
    this.scoresService.setnote13(this.note)
      this.scoresService.Up1();
    
      if (this.flag==1){
        this.scoresService.Reset0()
       
     }
      if (this.scoresService.GetCounter()==3){
        this.scoresService.SetZeroEnd();
        this.router.navigate(['/results']);
      }
      else{
        this.router.navigate(['/page14']);
      }
  }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
      EndTest(){
    this.scoresService.SetEnd();
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore13()
this.buttonDisabled=this.scoresService.getButton13()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
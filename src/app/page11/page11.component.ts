import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page11',
  templateUrl: './page11.component.html',
  styleUrls: ['./page11.component.css']
})
export class Page11Component implements OnInit {
flag;
  time="-";
  note="-";
  flag2;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private router: Router) { }

  setScore11(flag){
    this.scoresService.setScore11(flag)
    this.scoresService.setButton11(this.buttonDisabled)
    this.scoresService.setDevice2(this.flag2)
    
     this.scoresService.setnote11(this.note)
       this.scoresService.Up1();
    
      if (this.flag==1){
        this.scoresService.Reset0()
       
     }
      if (this.scoresService.GetCounter()==3){
        this.scoresService.SetZeroEnd();
        this.router.navigate(['/results']);
      }
      else{
        this.router.navigate(['/page12']);
      }
     
  }
  
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
      EndTest(){
    this.scoresService.SetEnd();
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore11()
this.buttonDisabled=this.scoresService.getButton11()
this.flag2=this.scoresService.getDevice2()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
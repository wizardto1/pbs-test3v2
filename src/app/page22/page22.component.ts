import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page22',
  templateUrl: './page22.component.html',
  styleUrls: ['./page22.component.css']
})
export class Page22Component implements OnInit {
flag;
  time;
  note="-";
  buttonDisabled:boolean=false;
 constructor(private scoresService: ScoresService, private router: Router) { }

  setScore22(flag){
    this.scoresService.setScore22(flag);
    this.scoresService.setnote22(this.note);
    
      
      
    
  }
  OnInput (event:any){
      this.note = event.target.value;
      console.log(this.note)
    }
      EndTest(){
    this.scoresService.SetEnd();
  }
  
  ngOnInit() {
  
this.flag=this.scoresService.getScore22()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}
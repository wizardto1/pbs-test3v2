import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
today= new Date();
name;
examiner;
testnum;
  jstoday = '';
  testnumber:number
  constructor(private scoresService: ScoresService) {this.jstoday = formatDate(this.today, 'MM-dd-yyyy hh:mm ', 'en-US'); }

  ngOnInit() {
    
  }
  SetParams(){
    this.scoresService.setName(this.name)
    this.scoresService.setExaminer(this.examiner)
    this.scoresService.setTest(this.testnum)
    this.scoresService.setDate(this.jstoday)
  }

}
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
  jstoday = '';
  testnumber:number
  constructor(private scoresService: ScoresService) {this.jstoday = formatDate(this.today, 'MM-dd-yyyy hh:mm ', 'en-US'); }

  ngOnInit() {
    this.testnumber=this.scoresService.getTest()
  }

}
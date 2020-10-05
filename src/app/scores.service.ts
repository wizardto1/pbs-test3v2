import { Injectable } from '@angular/core';
import { AppModule } from './app.module';

@Injectable()
export class ScoresService {
  scores:[any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  score1:any="skipped";
  score2:any="skipped";
  score3:any="skipped";
  score4:any="skipped";
  score5:any="skipped";
  score6:any="skipped";
  score7:any="skipped";
  score8:any="skipped";
  score9:any="skipped";
  score10:any="skipped";
  score11:any="skipped";
  score12:any="skipped";
  score13:any="skipped";
  score14:any="skipped";
  score15:any="skipped";
  score16:any="skipped";
  score17:any="skipped";
  score18:any="skipped";
  score19:any="skipped";
  score20:any="skipped";
  score21:any="skipped";
  score22:any="skipped";
  oneskip:boolean=false;
  twoskip:boolean=false;
  zeroend:boolean=false;
  end:boolean=false;
  zerocounter:number=0;
  button1:boolean;
  button2:boolean;
  button3:boolean;
  button4:boolean;
  button5:boolean;
  button6:boolean;
  button7:boolean;
  button8:boolean;
  button9:boolean;
  button10:boolean;
  button11:boolean;
  button12:boolean;
  button13:boolean;
  button14:boolean;
  total:number=0;
  max;
  qs:number=0;
  so:number=0;
  apa:number=0;
  pr:number=0;
  sg:number=0;
  note1:any;
  note2:any;
  note3:any;
  note4:any;
  note5:any;
  note6:any;
  note7:any;
  note8:any;
  note9:any;
  note10:any;
  note11:any;
  note12:any;
  note13:any;
  note14:any;
  note15:any;
  note16:any;
  note17:any;
  note18:any;
  note19:any;
  note20:any;
  note21:any;
  note22:any;
  time1:any;
  time2:any;time3:any;time4:any;
  time5:any;time6:any;
  time7:any;
  time8:any;
  time9:any;
  time10:any;
  time11:any;
  time12:any;
  time13:any;
  time14:any;
  time15:any;
  device1:string="-";
  device2:string="-";
  device3:string="-";
  leg1:string="-";
  leg2:string="-";
  leg3:string="-";
  leg4:string="-";
  leg5:string="-";
  leg6:string="-";
  leg7:string="-";
  leg8:string="-";
  test:string;
  name:string='-';
  examiner:string='-';
  date='-';
  setName(name){
    this.name=name
  }
  getName(){
    return this.name
  }
  setExaminer(examiner){
    this.examiner=examiner
  }
  getExaminer(){
    return this.examiner
  }
  setDate(date){
    this.date=date
  }
  getDate(){
    return this.date
  }
  setTest(test){
    this.test=test
  }
  
  getTest(){
    return this.test
  }
  setScore1(score){
    this.score1=score;
    console.log(this.score1)
  }
  getScore1(){
    return this.score1
  }
  setButton1(button){
    this.button1=button;
  }
  getButton1(){
    return this.button1;
  }
  setScore2(score){
    this.score2=score;
    
  }
  getScore2(){
    return this.score2
    
  }
  setButton2(button){
    this.button2=button;
  }
  getButton2(){
    return this.button2;
  }
  setScore3(score){
    this.score3=score;
    this.scores[0]=score;
    console.log(this.scores[0])
  }
  getScore3(){
    return this.score3
  }
  setButton3(button){
    this.button3=button;
  }
  getButton3(){
    return this.button3;
  }
   setScore4(score){
    this.score4=score;
    this.scores[1]=score;
  }
  getScore4(){
    return this.score4
  }
  setButton4(button){
    this.button4=button;
  }
  getButton4(){
    return this.button4;
  }
  setScore5(score){
    this.score5=score;
    this.scores[2]=score;
  }
  getScore5(){
    return this.score5
  }
  setButton5(button){
    this.button5=button;
  }
  getButton5(){
    return this.button5;
  }
  setScore6(score){
    this.score6=score;
    this.scores[3]=score;
  }
  getScore6(){
    return this.score6
  }
  setButton6(button){
    this.button6=button;
  }
  getButton6(){
    return this.button6;
  }
  setScore7(score){
    this.score7=score;
    this.scores[4]=score;
  }
  getScore7(){
    return this.score7
  }
  setButton7(button){
    this.button7=button;
  }
  getButton7(){
    return this.button7;
  }
  setScore8(score){
    this.score8=score;
    this.scores[5]=score;
  }
  getScore8(){
    return this.score8
  }
  setButton8(button){
    this.button8=button;
  }
  getButton8(){
    return this.button8;
  }
  setScore9(score){
    this.score9=score;
    this.scores[6]=score;
  }
  getScore9(){
    return this.score9
  }
  setButton9(button){
    this.button9=button;
  }
  getButton9(){
    return this.button9;
  }
  setScore10(score){
    this.score10=score;
    this.scores[7]=score;
  }
  getScore10(){
    return this.score10
  }
  setButton10(button){
    this.button10=button;
  }
  getButton10(){
    return this.button10;
  }
  setScore11(score){
    this.score11=score;
    this.scores[8]=score;
  }
  getScore11(){
    return this.score11
  }
  setButton11(button){
    this.button11=button;
  }
  getButton11(){
    return this.button11;
  }
  setScore12(score){
    this.score12=score;
    this.scores[9]=score;
  }
  getScore12(){
    return this.score12
  }
  setButton12(button){
    this.button12=button;
  }
  getButton12(){
    return this.button12;
  }
  setScore13(score){
    this.score13=score;
    this.scores[10]=score;
  }
  getScore13(){
    return this.score13
  }
  setButton13(button){
    this.button13=button;
  }
  getButton13(){
    return this.button13;
  }
  setScore14(score){
    this.score14=score;
    this.scores[11]=score;
    console.log(this.scores)
  }
  getScore14(){
    return this.score14
  }
  setButton14(button){
    this.button14=button;
  }
  getButton14(){
    return this.button14;
  }
setScore15(score){
    this.score15=score;
    this.scores[12]=score;
    console.log(this.scores)
  }
  getScore15(){
    return this.score16
  }setScore16(score){
    this.score16=score;
    this.scores[13]=score;
    console.log(this.scores)
  }
  getScore16(){
    return this.score16
  }setScore17(score){
    this.score17=score;
    this.scores[14]=score;
    console.log(this.scores)
  }
  getScore17(){
    return this.score18
  }setScore18(score){
    this.score18=score;
    this.scores[15]=score;
    console.log(this.scores)
  }
  getScore18(){
    return this.score18
  }setScore19(score){
    this.score19=score;
    this.scores[16]=score;
    console.log(this.scores)
  }
  getScore19(){
    return this.score19
  }setScore20(score){
    this.score20=score;
    this.scores[17]=score;
    console.log(this.scores)
  }
  getScore20(){
    return this.score20
  }setScore21(score){
    this.score21=score;
    this.scores[18]=score;
    console.log(this.scores)
  }
  getScore21(){
    return this.score21
  }setScore22(score){
    this.score22=score;
    this.scores[19]=score;
    console.log(this.scores)
  }
  getScore22(){
    return this.score22
  }
  gettotal(){
    console.log(this.scores)
    this.total=0;
    this.max=20;
    for (let i = 0; i < 20; i++){
      if (this.scores[i]=='skip'){
        console.log(this.max)
        this.max-=4;
      }
      else{
      this.total+=parseInt(this.scores[i]);
      console.log(this.total)}
    }
    console.log(this.total)
    return this.total;
  }
  getmax(){
    return this.max;
  }
  getqs(){
      this.qs=parseInt(this.scores[0])+parseInt(this.scores[6])+parseInt(this.scores[11])+parseInt(this.scores[18]);
      return this.qs
  }
  getso(){
      this.so=parseInt(this.scores[1])+parseInt(this.scores[13])+parseInt(this.scores[17]);
      return this.so
  }
  getapa(){
    this.apa=parseInt(this.scores[3])+parseInt(this.scores[4])+parseInt(this.scores[7])+parseInt(this.scores[9])+parseInt(this.scores[15])+parseInt(this.scores[16]);
    return this.apa;

  }
  getpr(){  
    this.pr=parseInt(this.scores[2])+parseInt(this.scores[10])+parseInt(this.scores[19]);
    return this.pr;
  }
  getsg(){
    this.sg=parseInt(this.scores[5])+parseInt(this.scores[8])+parseInt(this.scores[12])+parseInt(this.scores[14]);
    return this.sg;
  }
  setDevice1(device){this.device1=device; console.log(this.device1)}
  getDevice1(){return this.device1}
  setDevice2(device){this.device2=device;}
  getDevice2(){return this.device1}
  setDevice3(device){this.device3=device;}
  getDevice3(){return this.device3}
  setLeg1(leg){this.leg1=leg;}
  getLeg1(){return this.leg1}
  setLeg2(leg){this.leg2=leg;}
  getLeg2(){return this.leg2}
    setLeg3(leg){this.leg3=leg;}
getLeg3(){return this.leg3}
    setLeg4(leg){this.leg4=leg;}
  getLeg4(){return this.leg4}
    setLeg5(leg){this.leg5=leg;}
  getLeg5(){return this.leg5}
    setLeg6(leg){this.leg6=leg;}
  getLeg6(){return this.leg6}
    setLeg7(leg){this.leg7=leg;}
  getLeg7(){return this.leg7}
  setLeg8(leg){this.leg8=leg;}
  getLeg8(){return this.leg8}
  setnote1(note){this.note1=note}
  getnote1(){return this.note1}
  setnote2(note){this.note2=note}
  getnote2(){return this.note2}
  setnote3(note){this.note3=note}
  getnote3(){return this.note3}
  setnote4(note){this.note4=note}
  getnote4(){return this.note4}
  setnote5(note){this.note5=note}
  getnote5(){return this.note5}
  setnote6(note){this.note6=note}
  getnote6(){return this.note6}
  setnote7(note){this.note7=note}
  getnote7(){return this.note7}
  setnote8(note){this.note8=note}
  getnote8(){return this.note8}
  setnote9(note){this.note9=note}
  getnote9(){return this.note9}
  setnote10(note){this.note10=note}
  getnote10(){return this.note10}
  setnote11(note){this.note11=note}
  getnote11(){return this.note11}
  setnote12(note){this.note12=note}
  getnote12(){return this.note12}
  setnote13(note){this.note13=note}
  getnote13(){return this.note13}
  setnote14(note){this.note14=note}
  getnote14(){return this.note14}
  setnote15(note){this.note15=note}
  getnote15(){return this.note15}
  setnote16(note){this.note16=note}
  getnote16(){return this.note16}
  setnote17(note){this.note17=note}
  getnote17(){return this.note17}
  setnote18(note){this.note18=note}
  getnote18(){return this.note18}
setnote19(note){this.note19=note}
  getnote19(){return this.note19}setnote20(note){this.note20=note}
  getnote20(){return this.note20}setnote21(note){this.note21=note}
  getnote21(){return this.note21}setnote22(note){this.note22=note}
  getnote22(){return this.note22}
  settime1(time){this.time1=time}gettime1(){return this.time1}
  settime2(time){this.time2=time}gettime2(){return this.time2}
  settime3(time){this.time3=time}gettime3(){return this.time3}
  settime4(time){this.time4=time}gettime4(){return this.time4}
  settime5(time){this.time5=time}gettime5(){return this.time5}
  settime6(time){this.time6=time}gettime6(){return this.time6}
  settime7(time){this.time7=time}gettime7(){return this.time7}
  settime8(time){this.time8=time}gettime8(){return this.time8}
  settime9(time){this.time9=time}gettime9(){return this.time9}
  settime10(time){this.time10=time}gettime10(){return this.time10}
  settime11(time){this.time11=time}gettime11(){return this.time11}
  settime12(time){this.time12=time}gettime12(){return this.time12}
  settime13(time){this.time13=time}gettime13(){return this.time13}
  settime14(time){this.time14=time}gettime14(){return this.time14}
  settime15(time){this.time15=time}gettime15(){return this.time15}
  Up1(){
    this.zerocounter+=1
    console.log(this.zerocounter)
  }
  Reset0(){
    this.zerocounter=0;
  }
  GetCounter(){
    console.log(this.zerocounter)
    return this.zerocounter
  }
  SetOneSkip(){
    this.oneskip=true;
  }
  GetOneSkip(){
    return this.oneskip
  }
  SetTwoSkip(){
    this.twoskip=true;}
    SetTwoSkip2(){
    if(this.twoskip=true){this.twoskip=false;}
    }
  
  GetTwoSkip(){
    return this.twoskip
  }
  SetEnd(){
    this.end=true;
  }
  GetEnd(){
   
    return this.end
  }
  SetZeroEnd(){
    this.zeroend=true;
  }
  GetZeroEnd(){
    return this.zeroend;
  }





  reset(){
  this.scores=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  this.score1="skipped";
  this.score2="skipped";
  this.score3="skipped";
  this.score4="skipped";
  this.score5="skipped";
  this.score6="skipped";
  this.score7="skipped";
 this.score8="skipped";
  this.score9="skipped";
  this.score10="skipped";
  this.score11="skipped";
  this.score12="skipped";
  this.score13="skipped";
  this.score14="skipped";
  this.score15="skipped";
  this.score16="skipped";
  this.score17="skipped";
  this.score18="skipped";
  this.score19="skipped";
  this.score20="skipped";
  this.score21="skipped";
  this.score22="skipped";
  
  this.button1=false;
  this.button2=false;
  this.button3=false;
  this.button4=false;
  this.button5=false;
  this.button6=false;
  this.button7=false;
  this.button8=false;
  this.button9=false;
  this.button10=false;
  this.button11=false;
  this.button12=false;
  this.button13=false;
  this.button14=false;
  this.total=0;
  this.max=20;
  this.qs=0;
  this.so=0;
  this.apa=0;
  this.pr=0;
  this.sg=0;
  this.device1="-"
  this.device2="-"
  this.device3="-"
  this.leg1="-"
  this.leg2="-"
  this.leg3="-"
  this.leg4="-"
  this.leg5="-"
  this.leg6="-"
  this.leg7="-"
  this.leg8="-"
  this.note1="-"
  this.note2="-"
  this.note3="-"
  this.note4="-"
  this.note5="-"
  this.note6="-"
  this.note7="-"
  this.note8="-"
  this.note9="-"
  this.note10="-"
  this.note11="-"
  this.note12="-"
  this.note13="-"
  this.note14="-"
  this.note15="-"
  this.note16="-"
  this.note17="-"
  this.note18="-"
  this.note19="-"
  this.note20="-"
  this.note21="-"
  this.note22="-"
  this.time1="-"
  this.time2="-"
  this.time3="-"
  this.time4="-"
  this.time5="-"
  this.time6="-"
  this.time7="-"
   this.time8="-"
   this.time9="-"
    this.time10="-"
     this.time11="-"
      this.time12="-"
       this.time13="-"
        this.time14="-"
        this.time15="-"
  this.test+=1
  this.zerocounter=0;
  this.end=false;
  this.zeroend=false;
  this.oneskip=false;
  this.twoskip=false;
  this.name=''
  this.examiner=''
  this.test=''
  return
  }





  constructor() { }

}
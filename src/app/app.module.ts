import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { Page1Component } from './page1/page1.component';
import { TimerComponent } from './timer/timer.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';
import { Page11Component } from './page11/page11.component';
import { Page12Component } from './page12/page12.component';
import { Page13Component } from './page13/page13.component';
import { Page14Component } from './page14/page14.component';
import { Page15Component } from './page15/page15.component';
import { Page16Component } from './page16/page16.component';
import { Page17Component } from './page17/page17.component';
import { Page18Component } from './page18/page18.component';
import { Page19Component } from './page19/page19.component';
import { Page20Component } from './page20/page20.component';
import { Page21Component } from './page21/page21.component';
import { Page22Component } from './page22/page22.component';
import { ResultsComponent } from './results/results.component';
import { EmailComponent } from './email/email.component';
import { ScoresService } from './scores.service';
import { TimeService } from './time.service';




const appRoutes: Routes = [
  { path: '', redirectTo : '/home', pathMatch:'full'},{path:'home', component: HomeComponent, pathMatch:'full' },{path:'start',component:StartComponent},{path:'info',component:InfoComponent},{path:'page1',component:Page1Component},{path:'page2',component:Page2Component},{path:'page3',component:Page3Component},{path:'page4',component:Page4Component},{path:'page5',component:Page5Component},{path:'page6',component:Page6Component},{path:'page7',component:Page7Component},{path:'page8',component:Page8Component},{path:'page9',component:Page9Component},{path:'page10',component:Page10Component},{path:'page11',component:Page11Component},{path:'page12',component:Page12Component},{path:'page13',component:Page13Component},{path:'page14',component:Page14Component},{path:'page15',component:Page15Component},{path:'page16',component:Page16Component},{path:'page17',component:Page17Component},{path:'page18',component:Page18Component}, {path:'page19',component:Page19Component},{path:'page20',component:Page20Component},{path:'page21',component:Page21Component},{path:'page22',component:Page22Component},{path:'results',component:ResultsComponent},{path:'email',component:EmailComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, StartComponent, HomeComponent, HeaderComponent, InfoComponent, Page1Component, TimerComponent, Page2Component, Page3Component, Page4Component, Page5Component, Page6Component, Page7Component, Page8Component, Page9Component, Page10Component, Page11Component, Page12Component, Page13Component, Page14Component, Page15Component, Page16Component, Page17Component, Page18Component, Page19Component, Page20Component, Page21Component, Page22Component, ResultsComponent, EmailComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [ScoresService, TimeService]
})
export class AppModule { }
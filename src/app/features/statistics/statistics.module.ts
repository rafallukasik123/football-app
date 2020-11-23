import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { ListOfCompetitionsComponent } from './components/list-of-competitions/list-of-competitions.component';
import {ListOfMatchesComponent} from './components/list-of-matches/list-of-matches.component';


@NgModule({
  declarations: [FrontPageComponent, ListOfCompetitionsComponent, ListOfMatchesComponent],
  exports: [
    FrontPageComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }

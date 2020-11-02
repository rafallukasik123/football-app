import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontPageComponent} from './components/front-page/front-page.component';
import {ListOfCompetitionsComponent} from './components/list-of-competitions/list-of-competitions.component';

const routes: Routes = [
  {path: 'front-page' , component : FrontPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }

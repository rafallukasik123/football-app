import { Component, OnInit } from '@angular/core';
import {ListOfCompetitionsService} from '../../services/list-of-competitions.service';
import {Competitions} from '../../models/competitions';

@Component({
  selector: 'app-list-of-competitions',
  templateUrl: './list-of-competitions.component.html',
  styleUrls: ['./list-of-competitions.component.scss']
})
export class ListOfCompetitionsComponent implements OnInit {
  private data: Competitions;

  constructor(private listOfCompetitionsService: ListOfCompetitionsService) { }

   ngOnInit(): void {
    this.initData();
  }
  initData = () => {
   this.listOfCompetitionsService.getCompetitions().subscribe(
     res => {
       console.log(res);
     },
     error => {
       console.log(error);
     }
   );

  };

}

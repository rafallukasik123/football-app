import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Competitions} from '../../models/competitions';


@Component({
  selector: 'app-list-of-competitions',
  templateUrl: './list-of-competitions.component.html',
  styleUrls: ['./list-of-competitions.component.scss']
})
export class ListOfCompetitionsComponent implements OnInit {

  constructor() { }
  @Input() competitions: Competitions;
  @Input() selectedCompetition: number;
  @Output() changeCompetition = new EventEmitter<number>();

   ngOnInit(): void {}

   chooseCompetition = (competitionId: number) => {
     this.changeCompetition.emit(competitionId);
   }

}

import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Matches} from '../../models/matches';
import {Match} from '../../models/match';

@Component({
  selector: 'app-list-of-matches',
  templateUrl: './list-of-matches.component.html',
  styleUrls: ['./list-of-matches.component.scss']
})
export class ListOfMatchesComponent implements OnInit {
  @Input() listOfMatches: Matches;
  displayedMatches: Match[];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('listOfMatches') && (changes.listOfMatches.currentValue !== undefined)){
       const currentMatchDay = this.getCurrentMatchDay(changes.listOfMatches.currentValue);
       const filteredMatches = changes.listOfMatches.currentValue.matches.filter(el => {
           return el.matchday <= currentMatchDay;
         });
       filteredMatches.reverse();
      console.log(filteredMatches);
       this.displayedMatches = filteredMatches;

    }
  }

  getCurrentMatchDay = (matches: Matches) => {
    const today = new Date();
    const historicalMatches = matches.matches.filter(el => {
      return new Date(el.utcDate) < today;
    });
    if (historicalMatches.length > 0){
      return historicalMatches[historicalMatches.length - 1].matchday;
    }else{
      return 0;
    }
  }

}

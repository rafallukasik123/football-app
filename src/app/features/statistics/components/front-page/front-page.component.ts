import { Component, OnInit } from '@angular/core';
import {Competition} from '../../models/competition';
import {FrontPageService} from '../../services/front-page.service';
import {BehaviorSubject} from 'rxjs';
import {Matches} from '../../models/matches';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  constructor(private frontPageService: FrontPageService) { }
  competitions: Competition[];
  selectedCompetition: number;
  currentSelectedCompetition$ = new BehaviorSubject<number>(0);
  listOfMatches: Matches;
  ngOnInit(): void {
    this.subscribeSelectCompetition();
    this.initData();
  }

  initData = () => {
    this.frontPageService.getCompetitions().subscribe(
      res => {
        this.selectedCompetition = res.competitions[0].id;
        this.currentSelectedCompetition$.next(this.selectedCompetition);
        this.competitions = res.competitions;
      },
      error => {
        console.log(error);
      }
    );
  }
  changeCompetition = (idCompetition: number) => {
    this.selectedCompetition = idCompetition;
    this.currentSelectedCompetition$.next(this.selectedCompetition);
  }
  getAllMatchesById = (id: number) => {
    this.frontPageService.getAllMatchesById(id).subscribe(
      res => {
        this.listOfMatches = res;
      },
      error => {
        console.log(error);
      }
    );
  }
  subscribeSelectCompetition = () => {
    this.currentSelectedCompetition$.subscribe(val => {
      if (val !== 0 && val !== undefined){
        this.getAllMatchesById(val);
      }
    });
  }
}

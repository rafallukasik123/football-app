import { Component, OnInit } from '@angular/core';
import {Competition} from '../../models/competition';
import {FrontPageService} from '../../services/front-page.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  constructor(private frontPageService: FrontPageService) { }
  competitions: Competition[];
  selectedCompetition: number;
  ngOnInit(): void {
    this.initData();
  }

  initData = () => {
    this.frontPageService.getCompetitions().subscribe(
      res => {
        this.selectedCompetition = res.competitions[0].id;
        this.competitions = res.competitions;
      },
      error => {
        console.log(error);
      }
    );

  }
  changeCompetition = (idCompetition: number) => {
    this.selectedCompetition = idCompetition;
  }
}

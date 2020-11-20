import {Component, Input, OnInit} from '@angular/core';
import {Competitions} from '../../models/competitions';


@Component({
  selector: 'app-list-of-competitions',
  templateUrl: './list-of-competitions.component.html',
  styleUrls: ['./list-of-competitions.component.scss']
})
export class ListOfCompetitionsComponent implements OnInit {
  @Input() competitions: Competitions;

  constructor() { }

   ngOnInit(): void {}


}

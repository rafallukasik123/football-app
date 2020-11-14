import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Competitions} from '../models/competitions';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListOfCompetitionsService {

  constructor(private http: HttpClient){

  }

  getCompetitions = () => this.http.get<Competitions>(environment.endpointAddress + 'v2/competitions');
}

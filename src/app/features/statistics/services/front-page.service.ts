import { Injectable } from '@angular/core';
import {Competitions} from '../models/competitions';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrontPageService {

  constructor(private http: HttpClient) { }
  getCompetitions = () => this.http.get<Competitions>(environment.endpointAddress + `v2/competitions?plan=TIER_ONE`);
}

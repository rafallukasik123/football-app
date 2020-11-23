import {Season} from './season';
import {Odds} from './odds';
import {Score} from './score';
import {TeamsInfo} from './teams-info';
import {Referee} from './referee';

export interface Match {
  id: number;
  season: Season;
  utcDate: Date;
  status: string;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: Date;
  odds: Odds;
  score: Score;
  homeTeam: TeamsInfo;
  awayTeam: TeamsInfo;
  referees: Referee[];
}

import {Competition} from './competition';
import {Match} from './match';


export interface Matches {
  count: number;
  filters: any;
  competition: Competition;
  matches: Match[];
}

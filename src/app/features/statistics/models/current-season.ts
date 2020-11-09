import {Winner} from './winner';

export interface CurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday?: number;
  winner: Winner;
}

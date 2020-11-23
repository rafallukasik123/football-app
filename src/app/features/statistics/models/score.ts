import {Resaults} from './resaults';

export interface Score {
  winner: string;
  duration: string;
  fullTime: Resaults;
  halfTime: Resaults;
  extraTime: Resaults;
  penalties: Resaults;
}

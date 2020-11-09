import { TestBed } from '@angular/core/testing';

import { ListOfCompetitionsService } from './list-of-competitions.service';

describe('ListOfCompetitionsService', () => {
  let service: ListOfCompetitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfCompetitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

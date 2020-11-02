import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCompetitionsComponent } from './list-of-competitions.component';

describe('ListOfCompetitionsComponent', () => {
  let component: ListOfCompetitionsComponent;
  let fixture: ComponentFixture<ListOfCompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

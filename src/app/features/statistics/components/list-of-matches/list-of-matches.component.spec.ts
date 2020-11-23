import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMatchesComponent } from './list-of-matches.component';

describe('ListOfMatchesComponent', () => {
  let component: ListOfMatchesComponent;
  let fixture: ComponentFixture<ListOfMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

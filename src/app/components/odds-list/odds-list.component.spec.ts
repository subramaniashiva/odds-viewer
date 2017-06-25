/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OddsListComponent } from './odds-list.component';
import { OddsListItemComponent } from '../odds-list-item/odds-list-item.component';
import { generateData } from '../../utils/data';

describe('OddsListComponent', () => {
  let component: OddsListComponent;
  let fixture: ComponentFixture<OddsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddsListComponent, OddsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddsListComponent);
    component = fixture.componentInstance;
    component.oddsDetails = generateData();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

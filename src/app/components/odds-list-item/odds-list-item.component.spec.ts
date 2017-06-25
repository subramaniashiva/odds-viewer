/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OddsListItemComponent } from './odds-list-item.component';
import { generateData } from '../../utils/data';

describe('OddsListItemComponent', () => {
  let component: OddsListItemComponent;
  let fixture: ComponentFixture<OddsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddsListItemComponent);
    component = fixture.componentInstance;
    component.oddDetail = generateData()[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

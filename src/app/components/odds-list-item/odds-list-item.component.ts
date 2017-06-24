import { Component, OnInit, Input } from '@angular/core';

import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';
@Component({
  selector: 'app-odds-list-item',
  templateUrl: './odds-list-item.component.html',
  styleUrls: ['./odds-list-item.component.scss']
})
export class OddsListItemComponent implements OnInit {

  @Input() oddDetail: OddsListItemInterface;

  constructor() { }

  ngOnInit() {
  }

}

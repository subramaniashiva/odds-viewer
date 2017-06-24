import { Component, OnInit, Input } from '@angular/core';

import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';

@Component({
  selector: 'app-odds-list',
  templateUrl: './odds-list.component.html',
  styleUrls: ['./odds-list.component.scss']
})
export class OddsListComponent implements OnInit {

  @Input() oddsDetails: Array<OddsListItemInterface>;

  constructor() { }

  ngOnInit() {
  }

}

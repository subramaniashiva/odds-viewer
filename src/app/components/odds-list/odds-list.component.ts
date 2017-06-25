import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';
import { getMaximum } from '../../utils/helper';

@Component({
  selector: 'app-odds-list',
  templateUrl: './odds-list.component.html',
  styleUrls: ['./odds-list.component.scss']
})
export class OddsListComponent implements OnInit {

  @Input() oddsDetails: Array<OddsListItemInterface>;

  @Output() selectedTeam: EventEmitter<OddsListItemInterface> = new EventEmitter();

  currentOrder: string = '';

  hoverShown: boolean = false;

  hoverTable: Array<number> = [];

  hoverTableLeft: string;

  hoverTableTop: string;

  constructor() { }

  ngOnInit() {
  }

  sort(type, index) {
    this.oddsDetails.sort((a, b) => {
      let aMax = getMaximum(a.exchanges[index][type], 'price');
      let bMax = getMaximum(b.exchanges[index][type], 'price');
      return (this.currentOrder === 'descending') ? bMax - aMax : aMax - bMax;
    });

    this.currentOrder = (this.currentOrder === 'descending') ? 'ascending': 'descending';
  }

  onSelectedItem(val) {
    this.selectedTeam.emit(val);
  }

  onHoverShown(val) {
    this.hoverShown = val;
  }

  onHoverTable(val) {
    this.hoverTable = val;
  }

  onHoverEvent(val) {
    this.hoverTableLeft = (val.pageX - 30) + 'px';
    this.hoverTableTop = (val.pageY + 10) + 'px';
  }
}

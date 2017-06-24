import { Component, OnInit, Input } from '@angular/core';

import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';
import { getMaximum } from '../../utils/helper';

@Component({
  selector: 'app-odds-list-item',
  templateUrl: './odds-list-item.component.html',
  styleUrls: ['./odds-list-item.component.scss']
})
export class OddsListItemComponent implements OnInit {

  @Input() oddDetail: OddsListItemInterface;

  max_details: Array<Object> = [];

  hoverShown: boolean = false;

  hoverTable: Array<number> = [];

  hoverTableLeft: string = '0%';

  constructor() { }

  ngOnInit() {
    this.max_details = this.oddDetail.exchanges.map((item) => ({
      'back_all': getMaximum(item.back_all, 'price'),
      'lay_all': getMaximum(item.lay_all, 'price')
    }));
  }

  showHoverTable(type, index) {
    this.hoverShown = true;
    if(type === 'back') {
      this.hoverTable = this.oddDetail.exchanges[index].back_all.map((item) => (item.price));
      this.hoverTableLeft = ((index + 1)*20).toString() + '%';
    } else {
      this.hoverTable = this.oddDetail.exchanges[index].lay_all.map((item) => (item.price));
      this.hoverTableLeft = ((index + 1)*25).toString() + '%';
    }
  }

  hideHoverTable() {
    this.hoverShown = false;
    this.hoverTable = [];
  }
}

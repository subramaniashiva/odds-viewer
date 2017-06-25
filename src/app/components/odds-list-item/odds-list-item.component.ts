import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';
import { getMaximum } from '../../utils/helper';

@Component({
  selector: 'app-odds-list-item',
  templateUrl: './odds-list-item.component.html',
  styleUrls: ['./odds-list-item.component.scss']
})
export class OddsListItemComponent implements OnInit {

  @Input() oddDetail: OddsListItemInterface;

  @Output() selectedItem: EventEmitter<OddsListItemInterface> = new EventEmitter();

  @Output() hoverShown: EventEmitter<boolean> = new EventEmitter();

  @Output() hoverTable: EventEmitter<Array<number>> = new EventEmitter();

  @Output() hoverEvent: EventEmitter<MouseEvent> = new EventEmitter();

  max_details: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.max_details = this.oddDetail.exchanges.map((item) => ({
      'back_all': getMaximum(item.back_all, 'price'),
      'lay_all': getMaximum(item.lay_all, 'price')
    }));
  }

  showHoverTable(event:MouseEvent, type:string, index:number) {
    this.hoverShown.emit(true);
    this.hoverTable.emit(this.oddDetail.exchanges[index][type].map((item) => (item.price)));
    this.hoverEvent.emit(event);
  }

  hideHoverTable() {
    this.hoverShown.emit(false);
    this.hoverTable.emit([]);
  }

  selectItem() {
    this.selectedItem.emit(this.oddDetail);
  }
}

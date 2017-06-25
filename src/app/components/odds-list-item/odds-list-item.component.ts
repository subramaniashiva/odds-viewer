import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';
import { getMaximum } from '../../utils/helper';

@Component({
  selector: 'app-odds-list-item',
  templateUrl: './odds-list-item.component.html',
  styleUrls: ['./odds-list-item.component.scss']
})
export class OddsListItemComponent implements OnInit {

  // oddDetail - Team details.
  @Input() oddDetail: OddsListItemInterface;

  // selectedItem - Emitted when a team is selected.
  @Output() selectedItem: EventEmitter<OddsListItemInterface> = new EventEmitter();

  // hoverShown - Emitted when hover is shown.
  @Output() hoverShown: EventEmitter<boolean> = new EventEmitter();

  // hoverTable - Emiiten when hover is shown,
  @Output() hoverTable: EventEmitter<Array<number>> = new EventEmitter();

  // hoverEvent - Emits the mouse event.
  @Output() hoverEvent: EventEmitter<MouseEvent> = new EventEmitter();

  // max_details - Max odds from the bookmarker.
  max_details: Array<Object> = [];

  constructor() {}

  /**
   * Invokded when the component is rendered.
   * Computes the maximum odd from the bookmarker
   */
  ngOnInit() {
    this.max_details = this.oddDetail.exchanges.map((item) => ({
      'back_all': getMaximum(item.back_all, 'price'),
      'lay_all': getMaximum(item.lay_all, 'price')
    }));
  }

  /**
   * Emits the hover table details.
   * @param {MouseEvent} event - Mouse event. Used to compute positions.
   * @param {string} type - Back all or Lay all.
   * @return {number} index - specifies the exchange.
   */
  showHoverTable(event:MouseEvent, type:string, index:number) {
    this.hoverShown.emit(true);
    this.hoverTable.emit(this.oddDetail.exchanges[index][type].map((item) => (item.price)));
    this.hoverEvent.emit(event);
  }

  /**
   * Emits an event to instruct the hover table should be hidden.
   */
  hideHoverTable() {
    this.hoverShown.emit(false);
    this.hoverTable.emit([]);
  }

  /**
   * Emits the selected team.
   */
  selectItem() {
    this.selectedItem.emit(this.oddDetail);
  }

}

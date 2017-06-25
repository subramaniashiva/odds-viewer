import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';
import { getMaximum } from '../../utils/helper';

@Component({
  selector: 'app-odds-list',
  templateUrl: './odds-list.component.html',
  styleUrls: ['./odds-list.component.scss']
})
export class OddsListComponent implements OnInit {

  // oddsDetails - Contains all the odds details for all teams.
  @Input() oddsDetails: Array<OddsListItemInterface>;

  // Emits a team object when a team is clicked.
  @Output() selectedTeam: EventEmitter<OddsListItemInterface> = new EventEmitter();

  // currentOrder - Ascending or descending.
  currentOrder: string = '';

  // hoverShown - Flag to determine whether to show hover table or not.
  hoverShown: boolean = false;

  // hoverTable - contains the computed hover table.
  hoverTable: Array<number> = [];

  // hoverTableLeft - left position of the hover table.
  hoverTableLeft: string;

  // hoverTableTop - top position of the hover table.
  hoverTableTop: string;

  constructor() { }

  ngOnInit() {}

  /**
   * Sorts the table
   * @param {string} type - Back all or lay all.
   * @param {number} index - Column index to be sorted.
   */
  sort(type:string, index:number) {
    this.oddsDetails.sort((a, b) => {
      let aMax = getMaximum(a.exchanges[index][type], 'price');
      let bMax = getMaximum(b.exchanges[index][type], 'price');
      return (this.currentOrder === 'descending') ? bMax - aMax : aMax - bMax;
    });

    this.currentOrder = (this.currentOrder === 'descending') ? 'ascending': 'descending';
  }

  /**
   * Gets invoked when a team is selected.
   * @param {OddsListItemInterface} val - Team selected.
   */
  onSelectedItem(val: OddsListItemInterface) {
    this.selectedTeam.emit(val);
  }

  /**
   * Gets invoked when a hover is enabled.
   * @param {boolean} val - Whether is hover is on or not.
   */
  onHoverShown(val: boolean) {
    this.hoverShown = val;
  }

  /**
   * Gets invoked when a hover is enabled and a hover table is returned.
   * @param {Array} val - Array of other odds from the bookmarker.
   */
  onHoverTable(val: Array<number>) {
    this.hoverTable = val;
  }

  /**
   * Gets invoked when a hover is enabled and a mouse event is returned.
   * @param {MouseEvent} val - Mouse event when hovered over a cell.
   */
  onHoverEvent(val: MouseEvent) {
    this.hoverTableLeft = (val.pageX - 30) + 'px';
    this.hoverTableTop = (val.pageY + 10) + 'px';
  }
}

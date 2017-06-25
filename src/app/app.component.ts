import { Component } from '@angular/core';

import { OddsDetailsService } from './services/odds-details-service/odds-details-service.service';
import { OddsListItemInterface } from './interfaces/oddsListItemInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OddsDetailsService]
})
export class AppComponent {

  // oddsDetails - Contains the odds data.
  oddsDetails: Array<OddsListItemInterface> = [];

  // teamDetails - the team that is currently selected. Emitted from child component.
  teamDetails: OddsListItemInterface;

  /**
   * @constructor
   * @param {OddsDetailsService} odddetailsService -
     Service used to load odds details from back-end.
   */
  constructor(private odddetailsService: OddsDetailsService) {
    this.odddetailsService.getOddDetails().then((details) => {
      this.oddsDetails = details;
    });
  }

  /**
   * Invoked when team is selected from child component.
   * @param {OddsListItemInterface} val - The team object which is clicked by the user.
   */
  onSelectedTeam(val:OddsListItemInterface) {
    this.teamDetails = val;
  }
}
